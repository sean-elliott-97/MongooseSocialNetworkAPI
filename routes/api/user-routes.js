const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

router.route("/").get(getAllUsers).post(createUser);

//api/users/:userId
router.route("/:userId").get(getUserById).put(updateUser).delete(deleteUser);

//api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
