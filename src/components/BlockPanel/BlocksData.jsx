import React from 'react'
import '../css/BlocksData.css'



const BlocksData = ({
    number,
    timestamp,
    transactions,
    miner,
    blockReward,
    difficulty,
    totalDifficulty,
    size,
    gasUsed,
    gasLimit,
    feeBurnt,
    extraData,
}) => {
    return (
        <div>
            <div className="container-data-blocks">
                <div className="container-data-blocks2">


                    <div className="container-data-blocks6">
                        <div className="container-data-blocks7">
                            <div className="container-data-blocks3">
                                <h1 className="blocks-data">Block</h1><h1 className="blocks-data2">#{number}</h1>
                            </div>
                            <div className="container-data-blocks8">
                                <hr className="data-block" />
                                <div className="container-data-blocks4">
                                    <div className="container-block-height">Block Height:</div>
                                    <div className="container-data-block10">
                                        <div className="container-block-height11">{number}</div>
                                    </div>
                                </div>
                                <hr className="data-block" />
                                <div className="container-data-blocks4">
                                    <div className="container-block-height">Timestamp:</div>
                                    <div className="container-data-block10">
                                        <div className="container-block-height2">{timestamp}</div>
                                    </div>
                                </div>
                                <hr className="data-block" />

                                <div className="container-data-blocks4">
                                    <div className="container-block-height">Transactions:</div>
                                    <div className="container-data-block10">
                                        <div className="container-block-height2">{transactions}</div>
                                    </div>
                                </div>
                                <hr className="data-block" />

                                <div className="container-data-blocks4">
                                    <div className="container-block-height">Validated By:</div>
                                    <div className="container-data-block10">
                                        <div className="container-block-height2">{miner}</div>
                                    </div>
                                </div>
                                <hr className="data-block" />

                                <div className="container-data-blocks4">
                                    <div className="container-block-height">Block Reward:</div>
                                    <div className="container-data-block10">
                                        <div className="container-block-height2">{blockReward}</div>
                                    </div>
                                </div>
                                <hr className="data-block" />

                                <div className="container-data-blocks4">
                                    <div className="container-block-height">Difficulty:</div>
                                    <div className="container-data-block10">
                                        <div className="container-block-height2">{difficulty}</div>
                                    </div>
                                </div>
                                <hr className="data-block" />

                                <div className="container-data-blocks4">
                                    <div className="container-block-height">Total Difficulty:</div>
                                    <div className="container-data-block10">
                                        <div className="container-block-height2">{totalDifficulty}</div>
                                    </div>
                                </div>
                                <hr className="data-block" />

                                <div className="container-data-blocks4">
                                    <div className="container-block-height">Size:</div>
                                    <div className="container-data-block10">
                                        <div className="container-block-height2">{size}</div>
                                    </div>
                                </div>
                                <hr className="data-block" />

                                <div className="container-data-blocks4">
                                    <div className="container-block-height">Gas Used:</div>
                                    <div className="container-data-block10">
                                        <div className="container-block-height2">{gasUsed}</div>
                                    </div>
                                </div>
                                <hr className="data-block" />

                                <div className="container-data-blocks4">
                                    <div className="container-block-height">Gas Limit:</div>
                                    <div className="container-data-block10">
                                        <div className="container-block-height2">{gasLimit}</div>
                                    </div>
                                </div>
                                <hr className="data-block" />

                                <div className="container-data-blocks4">
                                    <div className="container-block-height">Fee Burnt:</div>
                                    <div className="container-data-block10">
                                        <div className="container-block-height2">{feeBurnt}</div>
                                    </div>
                                </div>
                                <hr className="data-block" />

                                <div className="container-data-blocks4">
                                    <div className="container-block-height">Extra Data:</div>
                                    <div className="container-data-blocks9">
                                        <textarea spellCheck="false" readOnly className="input-block" value={extraData} ></textarea>
                                    </div>
                                </div>

                                <hr className="data-block" />
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default BlocksData
