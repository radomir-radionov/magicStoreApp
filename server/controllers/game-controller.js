const GameModel = require("../models/game-model");
const gameService = require("../service/game-service");

class GameController {
  async getTopGames(req, res, next) {
    try {
      const gamesData = await GameModel.find();
      const filteredDataGames = gamesData
        .sort((game1, game2) => game2.rating - game1.rating)
        .slice(0, 3);
      res.status(200).json(filteredDataGames);
    } catch (e) {
      next(e);
    }
  }

  async getSearchedGames(req, res, next) {
    const { searchText } = req.query;
    const gamesData = await GameModel.find();

    if (!searchText) {
      return res.status(200).send([]);
    }

    if (searchText !== "") {
      if (
        gamesData.find(
          (game) =>
            game.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      ) {
        const filteredGames = gamesData.filter(({ name }) =>
          name.toLowerCase().includes(searchText.toLowerCase())
        );
        return res.status(200).send(filteredGames);
      }
      return res.status(201).end();
    }

    return res.status(200);
  }

  async addNewGame(req, res, next) {
    try {
      const { newGameData } = req.body;
      await gameService.addGame(newGameData);
      return res.status(200);
    } catch (e) {
      next(e);
    }
  }

  async editGame(req, res, next) {
    try {
      const { editedGameData } = req.body;
      await gameService.editGame(editedGameData);
      return res.status(200).json({ message: "Data has changed!" });
    } catch (e) {
      next(e);
    }
  }

  async getProduct(req, res, next) {
    try {
      const { platform, criteria, genre, age, searchText } = req.query;

      const gameData = await gameService.getFilteredGames(
        platform,
        criteria,
        genre,
        age,
        searchText
      );

      return res.status(200).json(gameData);
    } catch (e) {
      next(e);
    }
  }

  // async deleteGame(req, res, next) {
  //   try {
  //     const { id } = req.params;
  //     await gameService.deleteGame(id);
  //     return res.status(200);
  //   } catch (e) {
  //     next(e);
  //   }
  // }

  // async editGame(req, res, next) {
  //   try {
  //     const { _id, name, genre, description, price, image, platform, age } =
  //       req.body;
  //     await gameService.editGame(
  //       _id,
  //       name,
  //       genre,
  //       description,
  //       price,
  //       image,
  //       platform,
  //       age
  //     );
  //     return res.status(200);
  //   } catch (e) {
  //     next(e);
  //   }
  // }
}

module.exports = new GameController();
