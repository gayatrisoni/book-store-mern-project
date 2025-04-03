import React from 'react';
import Banner from '../home/Banner';
import TopSellers from "../home/TopSellers";
import Recommended from '../home/Recommended';

const Home = () => {
  return (
    <div>
      <Banner/>
      <TopSellers/>
      <Recommended/>
    </div>
  )
}

export default Home
