var path = require('path');

var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = 'width unknown zone beach room derive attack keen swear kangaroo brother final'

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
        provider: () => new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/3tb555OeVijXQHNSyKSP"),
        network_id: "4", // rinkeby network ID
        from: "0x33503f0e83f3d32673344e873b5f80553d7861cd", // default address to use for any transaction Truffle makes during migrations
        gas: 4612388 // Gas limit used for deploys
      },
      koven: {
        provider: () => new HDWalletProvider(mnemonic, "https://kovan.infura.io/v3/b125d0dc8f8f4f3e9b5350d25a1ce1b0"),
        network_id: "3", // rinkeby network ID
        from: "0x33503f0e83f3d32673344e873b5f80553d7861cd", // default address to use for any transaction Truffle makes during migrations
        gas: 4612388 // Gas limit used for deploys
      }
    }
};
