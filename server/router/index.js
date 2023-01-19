const Router = require("express").Router;
const gameController = require("../controllers/game-controller");
const userController = require("../controllers/user-controller");

const router = new Router();

// User
router.get("/refresh", userController.refresh);
router.get("/getUserData/:userId", userController.getUserData);
router.get("/:id/getUserCart", userController.getUserCart);

router.post("/signUp", userController.registration);
router.post("/signIn", userController.login);
router.post("/logout", userController.logout);
router.put("/updateUserData", userController.updateUserData);

// Games
router.get("/getGamesApi", gameController.getGamesApi);
router.get("/getGameData/data", gameController.getGameData);
router.get("/getTopGamesApi", gameController.getTopGamesApi);
router.get("/getFilteredGames", gameController.getFilteredGames);
router.post("/addNewGame", gameController.addNewGame);
router.post("/setGameInCart", userController.setGameInCart);
router.put("/editGame", gameController.editGame);
router.delete("/deleteGameInCart/:id/:gameId", userController.deleteGameInCart);

module.exports = router;
