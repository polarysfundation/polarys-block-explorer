/* eslint-disable no-self-compare */

import { useParams } from "react-router-dom";
import { Polarys, Uranus } from "../Web3/UserValidators";

const Miner = () => {
    const { getAddress } = useParams();


    if (getAddress === Uranus) {
        //console.log(true);
        return Uranus + " (Validator)"
    } if (getAddress === Polarys) {
        //console.log(true);
        return Polarys + " (Validator)"
    } if (getAddress === getAddress) {
        //console.log(false);
        return getAddress
    }
}

export default Miner