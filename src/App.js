import './App.css';
import Product from "./Product";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from "./Login";

function App() { 
 
  return( 
    <Router>
      <div className="app">
      <Navbar></Navbar>  
        <Switch>  <Route path="/login" exact component={Login} /> 
        <Route path = "/" exact component={App} /> 
        </Switch>
       
      
      <Product name= "Broccoli" chosenicon="/images/download.jpeg" price="$2.00" />  
      <Product name= "Wheat" chosenicon="/images/wheat.jpeg" price="$2.00" />  
      <Product name= "Salmon" chosenicon="/images/sal.jpg" price="$3.00" />  

        
      <Product name= "Rice"  price="$2.00" />  
      <Product name= "Olives" price="$2.00" />  
      <Product name="Almonds"  price="$3.00" />  


       <Footer></Footer>

    </div>
  </Router>     
  );  
}


  
export default App;
