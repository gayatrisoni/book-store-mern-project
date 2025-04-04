import React from 'react';
import Banner from '../home/Banner';
import TopSellers from "../home/TopSellers";
import Recommended from '../home/Recommended';
import News from '../home/News';

const Home = () => {
  return (
    <div>
      <Banner/>
      <TopSellers/>
      <Recommended/>
      <News/>
    </div>
  )
}

export default Home
