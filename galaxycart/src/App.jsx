import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import headphone from "./assets/hero/headphone.png";
import Products from './components/Products/Products';
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import Blogs from './components/Blogs/Blogs'; 

const BannerData = {
  discount:"30% OFF",
  title: "Fine Smile",
  date: "10 Oct to 28 Nov",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Sammer Sale",
  title4: "Featuring a fully custom acoustic platform. Personalized spatial audio with dynamic head tracking.3 Fully adaptive Active Noise Cancelling. Transparency mode. Lossless audio.4 Up to 40 hours of battery life2 and enhanced Apple and Android compatibility.6",
  bgColor: "#f42c37",

};

const BannerData2 = {
  discount:"30% OFF",
  title: "Rush Hour Sale",
  date: "39 Oct to 30 Oct",
  image: smartwatch2,
  title2: "Smart Watch",
  title3: "Sammer Sale",
  title4: "Featuring a fully custom acoustic platform. Personalized spatial audio with dynamic head tracking.3 Fully adaptive Active Noise Cancelling. Transparency mode. Lossless audio.4 Up to 40 hours of battery life2 and enhanced Apple and Android compatibility.6",
  bgColor: "#2dcc6f",

};
const App = () => {
  return <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData}/>
      <Products />
      <Banner data={BannerData2}/>
      <Blogs />
    </div>;
};

export default App;