/* eslint-disable no-self-compare */
import { useParams } from "react-router-dom"
import { Polarys, Uranus } from "../UserValidators";
import { 
    GovernanceHub,
    RelayerHub, 
    RelayerIncentivice, 
    SlashIndicador, 
    SystemRewards, 
    Tendermint, 
    TokenHub, 
    TokenManager, 
    ValidatorSet 
} from "../SystemContracts";



const VerifyAddress = () => {
    const {getAddress} = useParams();

    if(getAddress === ValidatorSet){
        return ValidatorSet + " (System Contract)"
    } if(getAddress === RelayerHub){
        return RelayerHub + " (System Contract)"
    } if(getAddress === TokenHub){
        return TokenHub + " (System Contract)"
    }if(getAddress === TokenManager){
        return TokenManager + " (System Contract)"
    }if(getAddress === RelayerIncentivice){
        return RelayerIncentivice + " (System Contract)"
    } if(getAddress === GovernanceHub){
        return GovernanceHub + " (System Contract)"
    }if(getAddress === SystemRewards){
        return SystemRewards + " (System Contract)"
    }if(getAddress === Tendermint){
        return Tendermint + " (System Contract)"
    }if(getAddress === SlashIndicador){
        return SlashIndicador + " (System Contract)"
    }    if (getAddress === Uranus) {
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

export default VerifyAddress