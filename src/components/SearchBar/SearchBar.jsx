/* eslint-disable no-mixed-operators */
/* eslint-disable no-self-compare */
/* eslint-disable eqeqeq */
/* eslint-disable valid-typeof */
/* eslint-disable array-callback-return */
import React, { useEffect, useRef, useState } from "react";
import Data from "../Database/Address/Address.json";
import { useNavigate, useParams } from "react-router-dom";
import { web3 } from '../Web3/NodeProvider'
import './Searchbar.css'

const SearchBar = () => {
  const valueBar = "Search by Address | Txn Hash | Block | Token";
  const history = useNavigate();
  const [query, setQuery] = useState("");
  const ref = useRef();
  const { error } = useParams();
  const [blockNumber, setBlockNumber] = useState(0);


  const getBlock = async () => {
    const blockNo = await web3.eth.getBlockNumber();

    setBlockNumber(blockNo);
  }
  const onChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    getBlock();
  }, []);



  const handleSubmit = (e) => {
    if (query === "" ) {
      e.preventDefault();
      return window.location.reload(new history(`/`));
    } if (web3.utils.isAddress(query || query == query)) {
      e.preventDefault();
      return window.location.reload(new history(`/address/${query}`));
    } if (Number(query) || Number.isInteger(query)) {
      e.preventDefault();
      return window.location.reload(new history(`/block/${query}`));
    } else {
      setQuery(error);
      return window.location.reload(new history(`/search=${query}`));
    }
  };

  console.log(blockNumber)

  return (
    <div>
      <form action="/" method="" name="" autoComplete="off" spellCheck="false" onSubmit={ev => ev.preventDefault()}>
        <div className="container-search2">
          <div className="container-search3">
            <div className="container-search4">
              <div className="container-search5">
                <input
                  ref={ref}
                  className="input-searchBar"
                  name=""
                  value={query}
                  placeholder={valueBar}
                  type="text"
                  onChange={onChange}
                />

                <button className="button-searchbar" onClick={handleSubmit}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="container-search">
        {Data.filter((post) => {
          if (query === "") {
            //if query is empty
            return post;
          } else if (
            post.Address.toLowerCase().startsWith(query.toLowerCase())
          ) {
            //returns filtered array
            return post;
          }
        })
          .slice(1, 5)
          .map((post) => (
            <div className="result-box" key={post.id}>
              <a href={`/address/${post.Address}`} className="address-link">
                <p>{post.Address}</p>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
