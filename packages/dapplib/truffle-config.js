require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'guess glimpse flame suspect notice crime remember mistake inner arch sun gas'; 
let testAccounts = [
"0x44f913bb508f510882e47b32935c48792b16a4592825acd70896f672a2d04925",
"0x736b7c9f92f11994626e909d93c186856b3a52019e91c73f737b5afe44f44787",
"0xd8b1f5a2f9d59cf754b600641f3131138837c6db2bae80ea9ad8b9c246ae57ad",
"0x4cbb1a2a26cb99a6f9342384cd1f51085b78245a11e15a606c5ea03793aae97e",
"0xce57903b467a03e1e7908a74f311a53ac0acb18606b0ac9d03be4ef16582db5a",
"0xf5543968be65b9349c7c776eb24d97f33444f2cd51510d702ae633841e2e7fc3",
"0xcdd677f5039875583334c058144ec93b17a8b97dfd9395ac9883be6f2bb4cdf6",
"0x20f27c0594fff81d8e3572116f5c2b42063277900f2f16bc371c6b95cb013847",
"0x0f0ebde6c9b2602982c5278a5f50fbc12b950f83d1360a3fdd5c5a8f06c6cd3a",
"0x4027f465cf60d622d5eec6d20b0de823b47110c093cdafb42d6e0d4b191555be"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


