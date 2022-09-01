const GameModel = require("../models/game-model");
const GameDto = require("../dtos/game-dto");

class GameService {
  async addGame(newGameData) {
    newGameData.rating = "1";
    const { name, genre, description, price, img, rating, age, platform } =
      newGameData;

    await GameModel.create({
      name,
      genre,
      description,
      price,
      img,
      rating,
      age,
      platform,
    });

    // const gameDto = new GameDto(game);
    // return {
    //   gameDto,
    // };
  }

  async editGame(editedGameData) {
    const { id, name, genre, description, price, img, age, platform } =
      editedGameData;

    const currentGame = await GameModel.findById(id);
    currentGame.name = name;
    currentGame.genre = genre;
    currentGame.description = description;
    currentGame.price = price;
    currentGame.img = img;
    currentGame.age = age;
    currentGame.platform = platform;

    await currentGame.save();
  }

  async getFilteredGames(platform, criteria, genre, age, searchText) {
    const allGames = await GameModel.find();

    const games = allGames;

    let gamesPlatform;

    if (platform === "") {
      gamesPlatform = games;
    } else {
      gamesPlatform = games.filter((game) => game.platform.includes(platform));
    }

    if (criteria) {
      gamesPlatform = gamesPlatform.sort();
    }

    if (criteria === "price") {
      gamesPlatform = gamesPlatform.sort(
        (game1, game2) => game2.price - game1.price
      );
    }

    if (criteria === "rating") {
      gamesPlatform = gamesPlatform.sort(
        (game1, game2) => game2.rating - game1.rating
      );
    }

    if (genre) {
      gamesPlatform = gamesPlatform.filter((game) => game.genre === genre);
    } else if (age) {
      gamesPlatform = gamesPlatform.filter((game) => game.age === age);
    } else if (searchText) {
      gamesPlatform = gamesPlatform.filter(({ name }) =>
        name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    return gamesPlatform;
  }

  // async deleteGame(_id) {
  //   const game = await GameModel.deleteOne({
  //     _id,
  //   });
  //   return {
  //     game,
  //   };
  // }
  // async editGame(_id, name, genre, description, price, image, platform, age) {
  //   const game = await GameModel.findById(_id);
  //   game.name = name;
  //   game.genre = genre;
  //   game.description = description;
  //   game.price = price;
  //   game.image = image;
  //   game.price = price;
  //   game.image = image;
  //   game.age = age;
  //   game.platform = platform;
  //   await game.save();
  //   return {
  //     game,
  //   };
  // }
}

module.exports = new GameService();
