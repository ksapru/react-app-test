import React from "react";
import "./App.css";
import "./App.js";



function Product(props) {
    return ( 

        <div className= "Product">

         

            <p> {props.name} </p>
            <p> <img src="/images/wheat.jpeg" alt="" height="100px" width="140px"/> </p>
            <p> {props.message} </p> 
            <p> {props.price} </p>
            <select>
                <option>Small</option>
                <option>Large</option>
            </select>
            <button name="Buy now" value="Buy"> Buy Now </button>
            <button name="Buy now" value="Buy"> Add to Cart </button>

            
           
        </div>
    
       
    );
}


export default Product;