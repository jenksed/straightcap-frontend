// src/components/templates/HomePageTemplate.js
import React from 'react';
import HomeCarousel from '../../../components/Home/HomeCarousel/HomeCarousel';
import RandomRappers from '../../../components/Home/RandomRappers/RandomRappers';
import UpcomingEvents from '../../../components/Home/UpcomingEvents/UpcomingEvents';
import BlogPosts from '../../../components/Home/BlogPosts/BlogPosts';
import './HomePageTemplate.css'; // Create this CSS file for styling

const HomePageTemplate = () => {
  return (
    <div className="homePageTemplate">
      <HomeCarousel />
      <div className="events-and-artists-container">
      <div class="randomRappersContainer">
    <div class="randomRappersGrid">
        
        <RandomRappers />
    </div>
</div>
    <div className="upcoming-events">
      <UpcomingEvents />
    </div>
  </div>
      
      
      
      <BlogPosts />
    </div>
  );
};

export default HomePageTemplate;
