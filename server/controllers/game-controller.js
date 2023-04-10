const axios = require("axios");
const GameModel = require("../models/game-model");
const gameService = require("../service/game-service");

class GameController {
  async getGamesApi(req, res, next) {
    try {
      const resp = await axios.get(
        `https://api.rawg.io/api/games?key=${process.env.GAME_API_KEY}`
      );
      return res.send(resp.data);
    } catch (e) {
      next(e);
    }
  }

  async getGameData(req, res, next) {
    const data = req.query;
    const { id } = data;
    try {
      const resp = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=${process.env.GAME_API_KEY}`
      );

      return res.send(resp.data);
    } catch (e) {
      next(e);
    }
  }

  async getTopGamesApi(req, res, next) {
    try {
      const resp = await axios.get(
        `https://api.rawg.io/api/games?key=${process.env.GAME_API_KEY}`
      );

      const gamesDataApi = resp.data.results;
      const filteredGames = gamesDataApi
        .sort((game1, game2) => game2.rating - game1.rating)
        .slice(0, 3);

      return res.send(filteredGames);
    } catch (e) {
      next(e);
    }
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

  async getFilteredGames(req, res, next) {
    try {
      const filteredGames = await gameService.getFilteredGames(req.query);
      return res.send(filteredGames);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new GameController();
