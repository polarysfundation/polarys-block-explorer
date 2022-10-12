import Web3 from "web3";
require('dotenv').config()

export const web3 = new Web3( new Web3.providers.WebsocketProvider(process.env.REACT_APP_NODE_PROVIDER));
export const chainID = process.env.REACT_APP_ID_CHAIN







