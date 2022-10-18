import { web3 } from "../Web3/NodeProvider";

var eth;
var isTestnet = 'false';

async function addNetwork(type) {

    if (type === 'web3') {
        if (typeof ethereum !== 'undefined') {
            eth = new Web3Eth(ethereum);
        } else if (typeof web3 !== 'undefined') {
            eth = new Web3Eth(web3.givenProvider);
        } else {
            eth = new Web3Eth(ethereum);
        }
    }

    if (typeof eth !== 'undefined') {
        var network = 0;
        network = await eth.net.getId();
        netID = network.toString();
        var params;
        if (isTestnet == "false") {
            if (netID == "56") {
                alert("BSC Network has already been added to Metamask.");
                return;
            } else {
                params = [{
                    chainId: '0x38',
                    chainName: 'BNB Smart Chain Mainnet',
                    nativeCurrency: {
                        name: 'BNB',
                        symbol: 'BNB',
                        decimals: 18
                    },
                    rpcUrls: ['https://bsc-dataseed1.binance.org/'],
                    blockExplorerUrls: ['https://bscscan.com/']
                }]
            }
        } else {
            if (netID == "97") {
                alert("BSC Test Network has already been added to Metamask.");
                return;
            } else {
                params = [{
                    chainId: '0x61',
                    chainName: 'BNB Smart Chain Testnet',
                    nativeCurrency: {
                        name: 'tBNB',
                        symbol: 'tBNB',
                        decimals: 18
                    },
                    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
                    blockExplorerUrls: ['https://testnet.bscscan.com/']
                }]
            }
        }

        window.ethereum.request({ method: 'wallet_addEthereumChain', params })
            .then(() => console.log('Success'))
            .catch((error) => console.log("Error", error.message));
    } else {
        alert('Unable to locate a compatible web3 browser!');
    }
}
