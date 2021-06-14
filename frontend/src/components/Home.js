import "../App.css";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Foodicons from "./Foodicons";
import OfferBig from "./OfferBig";

function Home() {
  return (
    <div className="App">
      <Banner />
      <Navbar greeting="SIGN IN" />
      <Searchbar />
      <Foodicons />
      <OfferBig />
    </div>
  );
}

export default Home;
