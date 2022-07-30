/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'Mumbai',
    networks: {
      hardhat: {},
      Mumbai : {
        url : 'https://rpc.ankr.https://polygon-mumbai.g.alchemy.com/v2/Oo5wIC8yYB7ncVgKuucWV3-7gi5tJHIJ/eth_goerli',
        accounts : ['0x ${process.env.PRIVATE_KEY}']
      }

    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
