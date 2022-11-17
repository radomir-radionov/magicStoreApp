const userService = require("../service/user-service");
const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/api-error");
const userModel = require("../models/user-model");
const Role = require("../models/role-model");
const bcrypt = require("bcrypt");

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest("Validation error", errors.array()));
      }

      const { email, password, name } = req.body;

      const user = await userModel.findOne({ email });
      if (user) {
        throw ApiError.BadRequest("User already exists");
      }

      const roleData = new Role({});
      const role = roleData.value;

      const userData = await userService.registration(
        role,
        email,
        password,
        name
      );
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res
        .status(200)
        .json({ userData, message: "You were registered!" });
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const payload = req.body;
      let { email, password } = payload;

      const user = await userModel.findOne({ email });
      if (!user) {
        throw ApiError.BadRequest("User not found");
      }

      const isPasswordEquals = await bcrypt.compare(password, user.password);
      if (!isPasswordEquals) {
        throw ApiError.BadRequest("Password is wrong");
      }

      const userData = await userService.login(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.status(200).json({ userData, message: "Successfully" });
    } catch (e) {
      next(e);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.status(200).json(token);
    } catch (e) {
      next(e);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.status(200).send(userData);
    } catch (e) {
      next(e);
    }
  }

  async getUserData(req, res, next) {
    try {
      const { userId } = req.params;
      const { _id, role, email, password, name, description, img, cart } =
        await userModel.findById(userId);
      const id = _id;
      const userClientData = {
        id,
        role,
        email,
        password,
        name,
        description,
        img,
        cart,
      };
      res.send(userClientData);
    } catch (e) {
      next(e);
    }
  }

  async updateUserData(req, res, next) {
    try {
      const payload = req.body;
      let { userId, newName = "", newDescription = "" } = payload;
      await userService.updateUserData(userId, newName, newDescription);
    } catch (e) {
      next(e);
    }
  }

  async putGameInCart(req, res, next) {
    try {
      const { id, game } = req.body;
      const isDataChanged = await userService.putGameInCart(id, game);
      return res
        .status(200)
        .json({ isDataChanged, message: "Game saved in your cart!" });
    } catch (e) {
      next(e);
    }
  }

  async deleteGameInCart(req, res, next) {
    try {
      const { id, gameId } = req.params;
      const isDataChanged = await userService.deleteGameInCart(id, gameId);
      return res
        .status(200)
        .json({ isDataChanged, message: "The game has been removed" });
    } catch (e) {
      next(e);
    }
  }

  async getUserCartGames(req, res, next) {
    try {
      const { userId } = req.params;
      const response = await userService.getUserCartGames(userId);
      return res.status(200).json(response);
    } catch (e) {
      next(e);
    }
  }

  async putNewDataCart(req, res, next) {
    try {
      const { id } = req.body;
      const isCartDataChanged = await userService.putNewDataCart(id);
      return res.status(200).json({
        isCartDataChanged,
        message: "Congratulations on purchasing!",
      });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
