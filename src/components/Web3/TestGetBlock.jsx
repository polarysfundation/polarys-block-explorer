/* eslint-disable no-self-compare */
import { web3, chainID } from './NodeProvider'
import React, { useState } from 'react'
import Validator from './Validator.json'
import { mineUranus } from './ValidatorsUsernames'

const currentValidators = Validator

function TestGetBlock() {

    //Blocks
    const [dataBlock, setDataBlock] = useState([])
    const [dataBlock1, setDataBlock1] = useState([])
    const [dataBlock2, setDataBlock2] = useState([])
    const [dataBlock3, setDataBlock3] = useState([])
    const [dataBlock4, setDataBlock4] = useState([])
    const [dataBlock5, setDataBlock5] = useState([])
    const [dataBlock6, setDataBlock6] = useState([])
    const [dataBlock7, setDataBlock7] = useState([])


    //getLatestBlock
    async function getLatestBlock(){
        const getLatestNumberBlock = await web3.eth.getBlockNumber();

        

        const getDataBlock = await web3.eth.getBlock(getLatestNumberBlock)
        const getDataBlock1 = await web3.eth.getBlock(getLatestNumberBlock - 1)
        const getDataBlock2 = await web3.eth.getBlock(getLatestNumberBlock - 2)
        const getDataBlock3 = await web3.eth.getBlock(getLatestNumberBlock - 3)
        const getDataBlock4 = await web3.eth.getBlock(getLatestNumberBlock - 4)
        const getDataBlock5 = await web3.eth.getBlock(getLatestNumberBlock - 5)
        const getDataBlock6 = await web3.eth.getBlock(getLatestNumberBlock - 6)
        const getDataBlock7 = await web3.eth.getBlock(getLatestNumberBlock - 7)
                                
        /*const fullDatBlock = {
            miner: getDataBlock.miner,
            hash: getDataBlock.hash,
            number: getDataBlock.number
        };*/
            
        try {
            const response = getDataBlock;
            const response1 = getDataBlock1;
            const response2 = getDataBlock2;
            const response3 = getDataBlock3;
            const response4 = getDataBlock4;
            const response5 = getDataBlock5;
            const response6 = getDataBlock6;
            const response7 = getDataBlock7;
            setDataBlock(response)
            setDataBlock1(response1)
            setDataBlock2(response2)
            setDataBlock3(response3)
            setDataBlock4(response4)
            setDataBlock5(response5)
            setDataBlock6(response6)
            setDataBlock7(response7)
            
            //console.log("response: " + response, response1, response2, response3, response4)
        }
            
        catch (err) {
            console.log("error: " + err);
            }
        }
        

    getLatestBlock()

    

    const nameValidator = () =>{
        if( dataBlock.miner === "0x140682cE472eC33E3705A4Ef22d9adEF07C2cDdD")return mineUranus;
    }


  return (
    <div>
        {nameValidator()}
    </div>
  )
}

export default TestGetBlock

