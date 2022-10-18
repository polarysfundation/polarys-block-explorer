import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Home/Homepage';
import { Route, Routes } from 'react-router-dom'
import Blocks from './components/BlockData/Blocks';
import Address from './components/AddressData/Address';
import AddressPanel from './components/AddressPanel/AddressPanel';
import SearchBar from './components/SearchBar/SearchBar';
import Page404 from './components/404/404';
import SearchNoFound from './components/404/SearchNoFound';


function App() {
  return (


    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <React.StrictMode>
          <SearchBar/>


        <Routes>
          <Route index path='/' element={<Homepage/>}></Route>
          <Route path='/address/:getAddress' element={<Address />}></Route>
          <Route path='/block/:blockNum' element={<Blocks />}></Route>
          <Route path=':path/address/:getAddress' element={<AddressPanel />}></Route>
          <Route path="/404" element={<Page404/>} />
          <Route path="/search=:error" element={<SearchNoFound/>} />
        </Routes>
      </React.StrictMode>
    </div>
  );
}

export default App;
