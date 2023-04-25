const register = require("./register");
const verify = require("./verify");
const resendVerifyEmail = require("./resendVerifyEmail");
const login = require("./login");
const logout = require("./logout");
const currentUser = require("./currentUser");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");

module.exports = {
  register,
  verify,
  resendVerifyEmail,
  login,
  logout,
  currentUser,
  updateSubscription,
  updateAvatar,
};
