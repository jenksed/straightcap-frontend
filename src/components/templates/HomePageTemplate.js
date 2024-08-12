// src/components/templates/HomePageTemplate.js
import React from 'react';
import HomeCarousel from '../../components/Home/HomeCarousel';
import RandomRappers from '../../components/Home/RandomRappers';
import UpcomingEvents from '../../components/Home/UpcomingEvents';
import BlogPosts from '../../components/Home/BlogPosts';
import './HomePageTemplate.css'; // Create this CSS file for styling

const HomePageTemplate = () => {
  return (
    <div className="homePageTemplate">
      <HomeCarousel />
      <RandomRappers />
      <UpcomingEvents />
      <BlogPosts />
    </div>
  );
};

export default HomePageTemplate;
