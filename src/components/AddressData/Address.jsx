/* eslint-disable eqeqeq */
/* eslint-disable no-self-compare */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { web3 } from '../Web3/NodeProvider'
import AddressPanel from '../AddressPanel/AddressPanel';
import Blockies from '../Blockies/BlockiesGen'
import './Address.css'
import '../AddressPanel/AddressPanel.css'
import VerifyAddress from '../Web3/VerifyAddress/VerifyAddress';

const Address = () => {
  const [address, setAddress] = useState([]);
  const [addressOrContract, setAddressOrContract] = useState([]);

  const { getAddress } = useParams()

  const getBalance = async () => {
    const address = await web3.eth.getBalance(getAddress);

    const verify = await web3.eth.getCode(getAddress);

    setAddressOrContract(verify)



    const balance = web3.utils.fromWei(address, 'ether');

    setAddress(balance)
  }

  useEffect(() => {
    getBalance()
  }, []);

  const numberEnt = Intl.NumberFormat('es-MX').format(address)




  const verifyAddress = () => {
    if (addressOrContract == "0x") {
      //console.log(await web3.eth.getCode(getAddress))
      return <h1 className="address-content">Address </h1>
    } else {
      return <h1 className="address-content">Contract </h1>
    }
  }

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
            {verifyAddress()}
            <div className="address"> {VerifyAddress()}</div>
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
