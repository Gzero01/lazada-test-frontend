import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import CardContent from "./components/CardContent";
import FlashSale from "./components/FlashSale";
import Footer from "./components/Footer";
import Collection from "./components/Collection";
import LazMall from "./components/LazMall";
import Categories from "./components/Categories";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        // height: "100vh",
        width: "100%",
        minWidth: "990px",
      }}
    >
      <Navbar />
      <Banner />
      <CardContent />
      <FlashSale />
      <Collection/>
      <LazMall/>
      <Categories/>
      <Footer/>
    </div>
  );
}

export default App;
