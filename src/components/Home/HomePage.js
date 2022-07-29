import ContactNavbar from "../Contact Navbar/ContactNavbar";
import MainNavbar from "../Main Navbar/MainNavbar";
import ProductPurchase from "../Product Quantity Purchase/ProductPurchase";
import ProductInfo from "../Product Info/ProductInfo";
import React from "react";

/* Rendering all child components of the main page  */
const HomePage = () => {
  return (
    <React.Fragment>
      <ContactNavbar />
      <MainNavbar />
      <ProductPurchase />
      <ProductInfo />
    </React.Fragment>
  );
};

export default HomePage;
