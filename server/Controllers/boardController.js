const boardService = require("../Services/boardService");

const create = async (req, res) => {
  const { title, backgroundImageLink } = req.body;
  if (!(title && backgroundImageLink))
    return res
      .status(400)
      .send({ errMessage: "Title and/or image cannot be null" });
  await boardService.create(req, (err, result) => {
    if (err) return res.status(500).send(err);
    result.__v = undefined;
    return res.status(201).send(result);
  });
};

const getAll = async (req, res) => {
  const userId = req.user.id;
  await boardService.getAll(userId, (err, result) => {
    if (err) return res.status(400).send(err);
    return res.status(200).send(result);
  });
};

module.exports = {
  create,
  getAll,
};
