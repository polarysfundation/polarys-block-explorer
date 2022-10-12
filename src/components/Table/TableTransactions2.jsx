import React from 'react'
import '../LatestTransactions/LatestTxns.css'

const TableTransactions2 = ({hash, from, to , value}) => {
    return (
        <div>
            <table className="container-tabletx4">
                <tbody>
                    <th className="container-tabletx6">
                        <td className="container-tabletx-block"><h1 className="block-h1">Tx</h1></td>
                        <td className="container-tabletx-time">
                            <td className="container-tabletx-block1">{hash}</td>
                        </td>

                    </th>
                    <th className="container-tabletx5">
                        <td className="container-tabletx7">
                            <td className="container-tabletx-miner">from {from}</td>
                            <td className="container-tabletx-miner"> </td>
                        </td>
                        <td className="container-tabletx-block2">to {to}</td>
                    </th>
                    <td className="container-value">
                        <td className="container-tabletx-block2"> {value}</td>
                    </td>
                </tbody>
            </table>
        </div>
    )
}

export default TableTransactions2