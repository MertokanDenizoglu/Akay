import React from "react";
import Header from "../components/Header/Header";
import Head from "../components/Head/Head";
import Slider from "../components/Slider/Slider";
import Shower from "../components/Shower/Shower";
import Text from "../components/Text/Text";


import Map from "../components/Map/Map";
import Footeralt from "../components/Footeralt/Footeralt";
import Rnavbar from "../components/Rnavbar/Rnavbar";
import Swiper from "../components/Swiper/Swiper";
import Flipteam from "../components/Flipteam/Flipteam";
import Footer from "../components/footer/Footer"
const Home = () => {
  return (
    <div>
    <Head />
    <Rnavbar/>
      <Header />
      
        <Slider />
        <Swiper/>
      <Shower />
      <Text />
      <Flipteam/>
      <Map/>
   <Footer/>
      <Footeralt/>
    
    </div>
  );
};
export default Home;
