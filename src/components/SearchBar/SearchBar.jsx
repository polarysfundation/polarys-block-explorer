/* eslint-disable array-callback-return */
import React, { useRef, useState } from 'react'
import Data from '../Database/Address/Address.json'


const SearchBar = () => {

  const valueBar = 'Search by Address | Txn Hash | Block | Token'


  const [query, setQuery] = useState("");


  const onChange = (event) => {
    setQuery(event.target.value);
  }




  return (
    <div>
      <form action="/" method='GET' name='q' autoComplete='off' spellCheck='false'>
        <div className="container-search2">
          <div className="container-search3">
            <div className="container-search4">
              <div className="container-search5">
                <input className='input-searchBar' name='q' value={query} placeholder={valueBar} type="text" onChange={onChange} />

                <button className='button-searchbar' type="submit">Search</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="container-search">
        {Data.filter(post => {
          if (query === "") {
            //if query is empty
            return post;
          } else if (post.Address.toLowerCase().startsWith(query.toLowerCase())) {
            //returns filtered array
            return post;
          }
        }).map((post) => (
          <div key={post.id}>
            <a href={`/address/${post.Address}`} className="address-link"><p>{post.Address}</p></a>
          </div>
        ))}
      </div>
    </div>

  )
}

export default SearchBar