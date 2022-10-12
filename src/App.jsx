import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Home/Homepage';
import { Route, Routes } from 'react-router-dom'
import Blocks from './components/BlockData/Blocks';
import Address from './components/AddressData/Address';
import AddressPanel from './components/AddressPanel/AddressPanel';
import SearchBar from './components/SearchBar/SearchBar';



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
          <Route path='/address/:getAddress' element={<AddressPanel />}></Route>
          <Route path="*" element={<div>404</div> } />
        </Routes>
      </React.StrictMode>
    </div>
  );
}

export default App;
