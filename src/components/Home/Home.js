import React from 'react';
import Banner from './Banner/Banner';
import BS from './BS/BS';
import MM from './MarketingMoto/MM';
import Media from './Media/Media';
import Navber from './Navber/Navber';
import Review from './Review/Review';
import Tools from './Tools/Tools';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
      return (
            <div>
                <TopBanner/>
                <Navber/>
                <Banner/>
                <MM/>
                <Tools/>
                <BS/>
                <Review/>
                <Media/>
            </div>
      );
};

export default Home;