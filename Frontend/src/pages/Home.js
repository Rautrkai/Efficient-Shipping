import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "D:\\SID_17\\CDAC\\PG-DAC\\sid   git final\\Efficient-Shipping-System\\Frontend\\src\\assets\\Transport1.jpg"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      <Navbar/>
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Efficient Shipping System </h1>
        <br></br>
        <p>We make moving big stuff cheap and easy with care...</p>
        <Link to="/contact">
          <button> BOOK NOW </button>
        </Link>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Home;
