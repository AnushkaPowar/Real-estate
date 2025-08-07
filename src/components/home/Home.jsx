import React from "react";
import Awards from "../home/awards/Awards";
import Featured from "../home/featured/Featured";
import Hero from "../home/hero/Hero";
import Location from "../home/location/Location";
import Price from "../home/price/Price";
import Recent from "../home/recent/Recent";
import Team from "../home/team/Team";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <Awards />
      <Location />
      <Team />
      <Price />
    </>
  );
};

export default Home;
