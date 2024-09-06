import './App.css';
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css'

import SampleFunctionalComponent from './components/SampleFunctionalComponent';
import SampleClassComponent from './components/SampleClassComponent';

import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Body from './components/Body';
import Footer from './components/Footer';

import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import AddProduct from './components/AddProduct';

import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  

  let [cart, setCart] = useState([]);
  let name = "Raymart Rosali";
  let addItems = (item) => {
    setCart(prevCart => [...prevCart, item]);
    alert("Item Added to Cart");
  }

  const {products, filteredProducts, filterFunction, AddProductFunction} = useFetch("https://kodegoreact.github.io/react-lessons-assets/products.json");
  
  // addProduct();

  
  // https://kodegoreact.github.io/react-lessons-assets/products.json
  
  return (
    <>
      {/* <h1>
        {3+3} 
        Hello World
      </h1>
      <h1>
        Hello World
      </h1>
      <SampleFunctionalComponent></SampleFunctionalComponent>
      <SampleFunctionalComponent></SampleFunctionalComponent>
      <SampleFunctionalComponent></SampleFunctionalComponent>
      <SampleFunctionalComponent />

      <SampleClassComponent></SampleClassComponent>
      <SampleClassComponent /> */}
      <BrowserRouter>
        <Navigation cart={cart}></Navigation>
        <Banner></Banner>
        <Routes>
          <Route path='/' element={<Body addItems={addItems} products={filteredProducts} filterFunction={filterFunction}></Body>}></Route>
          <Route path='/add' element={<AddProduct AddProductFunction={AddProductFunction}></AddProduct>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
   
  );
}

export default App;
