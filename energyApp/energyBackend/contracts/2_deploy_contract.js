var Ratings = artifacts.require("./backend.sol");

module.exports = function(deployer) {
  deployer.deploy(100, 999999, 100, 80, {gas: 6700000});
};