/* eslint-disable react-hooks/exhaustive-deps */
import { web3 } from "../Web3/NodeProvider";
import React, { useEffect, useState } from 'react'
import BlocksData from "../BlockPanel/BlocksData";
import {useParams} from 'react-router-dom'

const Blocks = () => {


    const [block, setBlock] = useState([]);

    const { blockNum } = useParams()


    const getBlock = async () =>{


            const latestBlock = await web3.eth.getBlock(Number(blockNum));


        //const block = [];

        const date = latestBlock.timestamp * 1000;

        const difficultyEnt = Intl.NumberFormat('es-MX').format(latestBlock.totalDifficulty)
        const gasLimitEnt = Intl.NumberFormat('es-MX').format(latestBlock.gasLimit)

        const dateNow = new Date(date).toUTCString()

        const data = {
            difficulty: latestBlock.difficulty,
            extraData: latestBlock.extraData,
            gasLimit: gasLimitEnt,
            gasUsed: latestBlock.gasUsed,
            hash: latestBlock.hash,
            logsBloom: latestBlock.logsBloom,
            validator: latestBlock.miner,
            mixHash:latestBlock.baseFeePerGas,
            nonce: latestBlock.nonce,
            number: latestBlock.number,
            parentHash: latestBlock.parentHash,
            receiptsRoot: latestBlock.receiptsRoot,
            sha3Uncles: latestBlock.sha3Uncles,
            size: latestBlock.size,
            stateRoot: latestBlock.stateRoot,
            timestamp: dateNow,
            totalDifficulty: difficultyEnt,
            transactions: latestBlock.transactions.length,
            transactionsRoot: latestBlock.transactionsRoot,
            uncles: latestBlock.uncles 
        }
            setBlock(data)



        //block.push(data);


    };



    useEffect(() =>{
        getBlock()
    }, []);


    return (
        <div>

                        {<BlocksData
                        number={block.number}
                        timestamp={block.timestamp}
                        transactions={block.transactions}
                        miner={<a className='a-blocks1' href={`/address/${block.validator}`}>{block.validator}</a>}
                        blockReward={""}
                        difficulty={block.difficulty}
                        totalDifficulty={block.totalDifficulty}
                        size={block.size}
                        gasUsed={block.gasUsed}
                        gasLimit={block.gasLimit}
                        feeBurnt={""}
                        extraData={block.extraData}
                        
                        />}

        </div>
      )
}

export default Blocks
