// pages/Blogs/Blogs.js
import React from 'react';
import './Blogs.css';

const Blogs = () => {
  return (
    <div className="blogs-container">
      <h1>Blogs</h1>
      {/* Example blog entries */}
      <div className="blog-entry">
        <h2>Blog Title 1</h2>
        <p>This is a summary of blog entry 1.</p>
      </div>
      <div className="blog-entry">
        <h2>Blog Title 2</h2>
        <p>This is a summary of blog entry 2.</p>
      </div>
    </div>
  );
};

export default Blogs;
