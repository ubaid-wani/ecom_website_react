import { createContext, useContext, useEffect, useReducer } from "react";
// import axios from "axios";
import reducer from "../reducer/productReducer";
import products from "../api/products.json"

const AppContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct :[]
};



const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  // const getProducts = async (url) => {
    const getProducts = ()=>{
    dispatch({ type: "SET_LOADING" });
    try {
      // const res = await axios.get(url);
      // const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload:products });
      // console.log(initialState.singleProduct)

    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };


  // my 2nd api call for single product

  const getSingleProduct = (id)=>{
  // async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      // const res = await axios.get(url);
      // const singleProduct = await res.data;
     //  const singleproduct = products
       console.log(products)
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: products[id]});
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };








 