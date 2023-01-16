const GameModel = require("../models/game-model");

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

  async getFilteredGames(gamesData) {}
}

module.exports = new GameService();
