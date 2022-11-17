const Router = require("express").Router;
const gameController = require("../controllers/game-controller");
const userController = require("../controllers/user-controller");

const router = new Router();

router.get("/refresh", userController.refresh);
router.get("/getUserData/:userId", userController.getUserData);
router.get("/getUserCartGames/:userId", userController.getUserCartGames);

router.post("/signUp", userController.registration);
router.post("/signIn", userController.login);
router.post("/logout", userController.logout);

router.put("/putNewDataCart", userController.putNewDataCart);
router.put("/updateUserData", userController.updateUserData);
router.put("/putGameInCart", userController.putGameInCart);

router.delete("/deleteGameInCart/:id/:gameId", userController.deleteGameInCart);

router.get("/getTopGames", gameController.getTopGames);
router.get("/search", gameController.getSearchedGames);
router.get("/product", gameController.getProduct);

router.post("/addNewGame", gameController.addNewGame);
router.put("/editGame", gameController.editGame);

module.exports = router;
