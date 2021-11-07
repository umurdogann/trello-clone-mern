const boardService = require("../Services/boardService");

const create = async (req, res) => {
  const { title, color } = req.body;
  if (!(title && color))
    return res
      .status(400)
      .send({ errMessage: "Title and/or color cannot be null" });
  await boardService.create(req, (err, result) => {
    if (err) return res.status(500).send(err);
    result.__v = undefined;
    return res.status(201).send(result);
  });
};

module.exports = {
  create,
};
