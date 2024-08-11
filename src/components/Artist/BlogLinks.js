import React from 'react';

const BlogLinks = ({ blogs }) => {
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
