var path = require('path');
var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  contracts_build_directory: path.join(__dirname, "src/contracts/"),
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      from: "0xd77c534aed04d7ce34cd425073a033db4fbe6a9d",
      gas: 4712388
    },
    rinkeby: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.RINKEBY_URL),
      network_id: "4", // rinkeby network ID
      from: process.env.ADDRESS, // default address to use for any transaction Truffle makes during migrations
      gas: 4612388 // Gas limit used for deploys
    },
    kovan: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.KOVAN_URL),
      network_id: "3", // rinkeby network ID
      from: process.env.ADDRESS, // default address to use for any transaction Truffle makes during migrations
      gas: 4612388 // Gas limit used for deploys
    }
  }
};