const { User } = require("../../models/user");

const { HttpError } = require("../../helpers");

const updateSubscription = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const result = await User.findByIdAndUpdate(_id, req.body, { new: true });
    if (!result) {
      throw HttpError(404, "Not Found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateSubscription;
