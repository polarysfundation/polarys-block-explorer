import React from 'react'
import { useParams } from 'react-router-dom'
import '../css/SearchNoFound.css'
import ImageSearch from '../../assets/images/Pol.png'

const SearchNoFound = () => {

    const { error } = useParams();
    return (
        <div>
            <div className="search-box">
                <div className="search-box1">
                    <div className="search-box2">
                        <div className="search-box3">
                            <div className="search-box4">
                                <p className="search-p">Search No</p>
                                <h1 className="search">Found</h1>
                            </div>
                            <p className="search-p2">sorry, the term you entered as {error} was not found.</p>
                            <p className="search-p2">please check and try again.</p>



                        </div>

                        <img src={ImageSearch} alt="SearchLogo" className="search-logo" />


                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchNoFound