import "./Home.css";
import Navbar from "../components/Navbar/Navbar" 
import HeroSection from "./HeroSection"
import Cards from "./Cards"
import Cards1 from "./Cards1"
import Footer from "../components/Footer/Footer"

function Home() {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <Cards />
      <Cards1 />
      <Footer />
    </div>
  );
}

export default Home;
