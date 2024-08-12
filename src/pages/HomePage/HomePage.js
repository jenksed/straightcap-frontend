import React from 'react';
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Layout from '../../components/Layout/Layout';
import RandomRappers from '../../components/Home/RandomRappers/RandomRappers';
import BlogPosts from '../../components/Home/BlogPosts/BlogPosts';
import UpcomingEvents from '../../components/Home/UpcomingEvents/UpcomingEvents';
import HomeCarousel from '../../components/Home/HomeCarousel/HomeCarousel';

const HomePage = () => {
  return (
    <Layout>
      <HomeCarousel />
      <div className="content-wrapper"> {/* Added wrapper for margins */}
        <div className="row">
          <div className="col-md-8">
            <RandomRappers />
            <BlogPosts />
          </div>
          <div className="col-md-4">
            <UpcomingEvents />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
