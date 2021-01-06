import './App.css';
import React from "react";
import Product from "./Product";
import Navbar from "./Navbar";
import Footer from "./Footer";


function App() { 

  return(      
      <div className="app">

      <Navbar></Navbar>  
    
      <Product name= "Broccoli"  price="$2.00" />  
      <Product name= "Wheat"  price="$2.00" />  
      <Product name= "Salmon"  price="$3.00" />  

        
      <Product name= "Rice"  price="$2.00" />  
      <Product name= "Olives" price="$2.00" />  
      <Product name="Almonds"  price="$3.00" />  


       <Footer></Footer>
    </div>
  
  );  
}


  
export default App;