// HomePage.js
import React from 'react';
import './HomePage.css'; // Ensure this CSS contains the grid styling.
import Layout from '../../components/Layout/Layout'; // Make sure the path is correct.
import RandomRappers from '../../components/Home/RandomRappers';
import BlogPosts from '../../components/Home/BlogPosts';
import UpcomingEvents from '../../components/Home/UpcomingEvents';

const HomePage = () => {
  return (
    <Layout>
      <div className="homeGrid">
        <div className="gridRappers">
          <RandomRappers />
        </div>
        <div className="gridBlogs">
          <BlogPosts />
        </div>
        <div className="gridEvents">
          <UpcomingEvents />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
