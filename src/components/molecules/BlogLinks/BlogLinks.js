import React from 'react';
import './BlogLinks.css'; // Make sure to import your CSS for styling

const BlogLinks = ({ blogs }) => {
  // Check if blogs is an array and has items
  if (!Array.isArray(blogs) || blogs.length === 0) {
    return <div className="blogLinks">No blog links available.</div>; // Fallback if no blogs are found
  }

  return (
    <div className="blogLinks">
      {blogs.map(blog => (
        <a key={blog._id} href={`/blog/${blog.slug.current}`} className="blogLink">
          {blog.title}
        </a>
      ))}
    </div>
  );
};

export default BlogLinks;
