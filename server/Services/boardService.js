const boardModel = require("../Models/boardModel");
const userModel = require("../Models/userModel");

const create = async (req, callback) => {
  try {
    const { title, color } = req.body;

    // Create and save new board
    const tempBoard = boardModel({ title, color });
    const newBoard = await tempBoard.save();

    // Add this board to owner's boards
    console.log(req.user.id)
    const user = await userModel.findById(req.user.id);
    user.boards.unshift(newBoard.id);
    await user.save();

    // Add user to members of this board
    newBoard.members.push({ user: user.id, name: user.name, role: "owner" });

    // Add created activity to activities of this board
    newBoard.activity.unshift({ action: `New board created by ${user.name}` });

    // Save new board
    const result = await newBoard.save();

    return callback(false, newBoard);
  } catch (error) {
    return callback({
      errMessage: "Something went wrong",
      details: error.message,
    });
  }
};

module.exports = {
  create,
};
