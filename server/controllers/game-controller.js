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

  async getFilteredGames(req, res, next) {
    // add logic to service
    // await gameService.getFilteredGames(resp.data);

    try {
      const { platform, criteria, genre, age } = req.query;
      const resp = await axios.get(
        `https://api.rawg.io/api/games?key=${process.env.GAME_API_KEY}`
      );
      const gamesDataApi = resp.data.results;
      let gamesData = gamesDataApi;
      let filteredGames = [];

      const filterGamesByPlatform = (searchElement) => {
        filteredGames = gamesData.filter(({ parent_platforms }) =>
          parent_platforms.some((parent_platform) =>
            parent_platform.platform.slug.includes(searchElement)
          )
        );
      };

      if (platform) {
        if (platform === "all-platforms") {
          filteredGames = gamesData;
        } else {
          filterGamesByPlatform(platform);
        }
      }

      const filterGamesByGenre = (searchElement) => {
        filteredGames = filteredGames.filter(({ genres }) =>
          genres.some(({ slug }) => slug.includes(searchElement))
        );
      };

      if (genre) {
        if (genre === "all-genres") {
          filteredGames = filteredGames;
        } else {
          filterGamesByGenre(genre);
        }
      }

      const filterGamesByAge = (searchElement) => {
        filteredGames = filteredGames.filter((game) =>
          game.esrb_rating.slug.includes(searchElement)
        );
      };

      if (age) {
        if (age === "everyone") {
          filteredGames = filteredGames;
        } else {
          filterGamesByAge(age);
        }
      }

      if (criteria) {
        if (criteria === "name") {
          filteredGames.sort((game1, game2) => {
            if (game1.name < game2.name) {
              return -1;
            }
            if (game1.name > game2.name) {
              return 1;
            }
            return 0;
          });
        }
        if (criteria === "rating") {
          filteredGames.sort((game1, game2) => game2.rating - game1.rating);
        }
        if (criteria === "price") {
          filteredGames.sort(
            (game1, game2) =>
              game2.reviews_text_count - game1.reviews_text_count
          );
        }
      }

      return res.send(filteredGames);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new GameController();
