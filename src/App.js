import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./Counter";
import LoginForm from "./LoginForm";
import Navigation from "./Navigation";
import ShoppingCart from "./ShoppingCart";
import ProductList from "./ProductList";
import Aboutus from "./Aboutus";
import Products from "./Products";
import Service from "./Service";
import { useState } from "react";

function App() {
  const loginState = useSelector((state) => state.auth.loginState);
  const cartState = useSelector((state) => state.cartToggle.cartToggleState);
  const itemsCart = useSelector((state) => state.cartItems.items);
const [error, setError] = useState(false)

  useEffect(() => {
    async function sendDatatoCart() {
      const response = await fetch(
        "https://react-app-5b79a-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(itemsCart),
        }
      );
      if(!response.ok){
        throw new Error('something went wrong');
      }
      const data = response.json();
      console.log(data);
    }
    sendDatatoCart().catch((err)=>{
      setError(err.message)
    });
  }, [itemsCart]);

  return (
    <div className="App">
      <Navigation />
      <div style={{ paddingTop: "100px" }}>
        {!loginState && <LoginForm />}
        {loginState && (
          <>
            <Counter /> {cartState && <ShoppingCart />} <ProductList />
          </>
        )}{error && error}
        <Aboutus />
        <Products />
        <Service />
      </div>
    </div>
  );
}

export default App;
