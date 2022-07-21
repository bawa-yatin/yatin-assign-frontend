import ContactNavbar from "./components/Contact Navbar/ContactNavbar";
import MainNavbar from "./components/Main Navbar/MainNavbar";
import ProductPurchase from "./components/Product Quantity Purchase/ProductPurchase";
import ProductInfo from "./components/Product Info/ProductInfo";

function App() {
  return (
    <div className="App">
      <ContactNavbar />
      <MainNavbar />
      <ProductPurchase />
      <ProductInfo />
    </div>
  );
}

export default App;
