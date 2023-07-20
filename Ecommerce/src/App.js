import React from "react";
import Homes from "./Ecomerce/Home";
import Ehome from "./Componet/E/Ehome";
import Ecart from "./Componet/E/Ecart";
import { CartProvider } from "react-use-cart";
import "./App.css"


const App = () => {
  return (
    <div>
     
        <CartProvider>
        <Ehome />
        <Ecart/>
       
      </CartProvider> 
     
    </div>
  );
};

export default App;






