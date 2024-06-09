import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "#1c1c1c",
      white: "#fff",
      black: " #212529",
      helper: "#656765",

      bg: "#f3f1ef",
      bg2:"#fff",
      footer_bg: "#1c1c1c",
      btn: "#1c1c1c",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/ecom_website_react" element={<Home />} />
          <Route path="/ecom_website_react/about" element={<About />} />
          <Route path="/ecom_website_react/products" element={<Products />} />
          <Route path="/ecom_website_react/contact" element={<Contact />} />
          <Route path="/ecom_website_react/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/ecom_website_react/cart" element={<Cart />} />
          <Route path="/ecom_website_react/*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
