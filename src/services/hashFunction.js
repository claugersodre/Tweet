const crypto = require("crypto");
const hash = (element) => {
  const hash = crypto.createHash("sha1").update(element).digest("hex");
  return hash;
};
const factory = {
    hash
  };
  module.exports = factory;