const axios = require("axios");
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

  async getFilteredGames(queryParams) {
    const { platform, criteria, genre, age, searchText } = queryParams;
    console.log("searchText:", searchText);
    try {
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

        if (
          filteredGames.find(
            (game) =>
              game.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
          )
        ) {
          filteredGames = filteredGames.filter(({ name }) =>
            name.toLowerCase().includes(searchText.toLowerCase())
          );
        }
      }

      return filteredGames;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new GameService();
