import React from 'react';
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Layout from '../../components/Layout/Layout';
import HomePageTemplate from '../../components/templates/HomePageTemplate/HomePageTemplate'; // Import the new template

const HomePage = () => {
  return (
    <Layout>
      <HomePageTemplate /> {/* Use the new HomePageTemplate component */}
    </Layout>
  );
};

export default HomePage;
