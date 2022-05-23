import React from 'react';
import Banner from './Banner/Banner';
import BS from './BS/BS';
import MM from './MarketingMoto/MM';
import Media from './Media/Media';
import Review from './Review/Review';
import Tools from './Tools/Tools';


const Home = () => {
      return (
            <div>
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