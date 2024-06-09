import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();


// get data from local storage
const getLocalCartData = () => {
  let newCartdata = localStorage.getItem("wanicart");
  if( newCartdata===[]) {
    return [];
  } else {
    return JSON.parse(newCartdata);
  }
};

 const initialState = {
 //cart: [],
   cart: getLocalCartData(),
   total_item: "",
   total_price: "",
   shipping_fee: 50000,
 };

 const CartProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount,image, product) => {
   dispatch({ type: "ADD_TO_CART", payload: { id, color, amount,image, product } });
  };

  // increment and decrement the product

   const setDecrease = (id) => {
     dispatch({ type: "SET_DECREMENT", payload: id });
   };

   const setIncrement = (id) => {
     dispatch({ type: "SET_INCREMENT", payload: id });
   };

   //! to remove the individual item from cart

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  //!  to add the data in localStorage

  useEffect(() => {
    //dispatch({ type: "CART_TOTAL_ITEM" });
    // dispatch({ type: "CART_TOTAL_PRICE" });
     dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
   localStorage.setItem("wanicart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
         removeItem,
        clearCart,
        setDecrease,
       setIncrement,
      }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
