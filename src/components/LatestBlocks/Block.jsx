
import React, { useEffect, useState } from 'react'
import TableBlock from '../Table/TableBlock';
import { web3 } from '../Web3/NodeProvider';
import '../Table/TableBlock.css';
import { mineUranus } from '../Web3/ValidatorsUsernames';
import { Uranus } from '../Web3/UserValidators';



const Block = () => {

    const [block, setBlock] = useState([]);

    const getBlock = async () => {

        const getLatestBlock = await web3.eth.getBlockNumber()


        const blocks = [];

        for (let i = 0; i < 10; i++) {
            const latestBlock = await web3.eth.getBlock(getLatestBlock - i);

            const date = latestBlock.timestamp * 1000;
            const dateNow = new Date(date)



            const userName = () => {
                if (latestBlock.miner === Uranus) return mineUranus;
            }

            const dataBlock = {
                id: latestBlock.hash,
                difficulty: latestBlock.difficulty,
                extraData: latestBlock.extraData,
                gasLimit: latestBlock.gasLimit,
                gasUsed: latestBlock.gasUsed,
                hash: latestBlock.hash,
                logsBloom: latestBlock.logsBloom,
                address: latestBlock.miner,
                validator: userName(),
                mixHash: latestBlock.mixHash,
                nonce: latestBlock.nonce,
                number: latestBlock.number,
                parentHash: latestBlock.parentHash,
                receiptsRoot: latestBlock.receiptsRoot,
                sha3Uncles: latestBlock.sha3Uncles,
                size: latestBlock.size,
                stateRoot: latestBlock.stateRoot,
                timestamp: dateNow.toUTCString(),
                totalDifficulty: latestBlock.totalDifficulty,
                transactions: latestBlock.transactions.length,
                transactionsRoot: latestBlock.transactionsRoot,
                uncles: latestBlock.uncles
            };

            blocks.push(dataBlock)
        }

        setBlock(blocks)

    };

    useEffect(() => {
        //setInterval(() => {
            getBlock();
        //}, 1000);

    }, []);


    return (
        <div>
            <div className="container-table">
                <div className="container-table2">
                    <div className="container-table3">
                        <h1 className="table-h1">Latest Block</h1>

                        <div className="container-table-blockdata">
                            {block.map(data => (

                                <>
                                    <hr className="table-hr" />
                                    <TableBlock
                                        key={data.id}

                                        number={<a className='a-blocks1' href={`/block/${data.number}`}>{data.number}</a>}
                                        miner={<a className='a-blocks1' href={`/address/${data.address}`}>{data.validator}</a>}
                                        transactions={<a className='a-blocks1' href={`/txns/${data.transactions}`}>{data.transactions}</a>}
                                        timestamp={data.timestamp}

                                    />
                                </>


                            ))}
                        </div>
                        <hr className="table-hr" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Block

