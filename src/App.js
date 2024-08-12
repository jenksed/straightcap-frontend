import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/HomePage'; // Import the Homepage component
import About from './pages/About/About'; // Import the About page component
import ArtistPage from './pages/ArtistPage/ArtistPage'; // Example of another page component
import Artists from './pages/Artists/Artists'; // Example of a page component for artists
import LoginPage from './pages/User/LoginPage'; // Import the LoginPage component
import RegistrationPage from './pages/User/RegistrationPage'; // Import the RegistrationPage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:slug" element={<ArtistPage />} /> {/* Change this line */}
        <Route path="/user/login" element={<LoginPage />} />
        <Route path="/user/register" element={<RegistrationPage />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
