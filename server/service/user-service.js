const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");

class UserService {
  async registration(role, email, password, name) {
    const candidate = await User.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequest(
        `Пользователь с почтовым адресом ${email} уже существует`
      );
    }
    const hashPassword = await bcrypt.hash(password, 3);

    const user = await User.create({
      role,
      email,
      password: hashPassword,
      name,
      description: "",
    });

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      throw ApiError.BadRequest("Пользователь с таким email не найден");
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest("Password is wrong");
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError();
    }
    const user = await User.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, userData: userDto };
  }

  async updateUserData(userId, newName, newDescription) {
    const user = await User.findOne({ userId });
    console.log("updateUserData:", newName, newDescription);
    let name;
    let description;

    newName === "" ? (name = user.name) : (name = newName);

    newDescription === ""
      ? (description = user.description)
      : (description = newDescription);

    await User.findByIdAndUpdate(userId, {
      name: name,
      description: description,
    });
  }

  async getUserCartGames(userId) {
    const { cart } = await User.findById(userId);
    return cart;
  }

  async putNewDataCart(id) {
    await User.findByIdAndUpdate(id, {
      cart: [],
    });
    return true;
  }

  async putGameInCart(id, game) {
    const { cart } = await User.findById(id);
    cart.push(game);
    await User.findByIdAndUpdate(id, {
      cart: cart,
    });
    return true;
  }

  async deleteGameInCart(id, gameId) {
    const { cart } = await User.findById(id);
    const cartFiltered = cart.filter((game) => game._id.valueOf() !== gameId);
    await User.findByIdAndUpdate(id, {
      cart: cartFiltered,
    });
    return true;
  }
}

module.exports = new UserService();
