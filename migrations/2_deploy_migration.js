const DividendsToken = artifacts.require("DividendsToken");

module.exports = function (deployer) {
  deployer.deploy(DividendsToken);
};
