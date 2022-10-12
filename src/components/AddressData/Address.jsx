/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { web3 } from '../Web3/NodeProvider'
import AddressPanel from '../AddressPanel/AddressPanel';
import Blockies from '../Blockies/BlockiesGen'
import './Address.css'
import Miner from '../VerifyValidators/VerifyValidators';
import '../AddressPanel/AddressPanel.css'

const Address = () => {
  const [address, setAddress] = useState([]);

  const { getAddress } = useParams()

  const getBalance = async () => {
    const address = await web3.eth.getBalance(getAddress);



    const balance = web3.utils.fromWei(address, 'ether');

    setAddress(balance)
  }

  useEffect(() => {
    getBalance()
  }, []);

  const numberEnt = Intl.NumberFormat('es-MX').format(address)



  return (
    <div>
      <div className="address-container2">
        <div className="address-container">
          <div className="gen-blockies">
              <Blockies
                seed={getAddress}
                size={15}
                scale={4}
              />
            <h1 className="address-content">Address </h1>
            <div className="address"> {Miner()}</div>
          </div>

          <AddressPanel
            balance={numberEnt}
          />
        </div>
      </div>
    </div>
  )
}

export default Address
