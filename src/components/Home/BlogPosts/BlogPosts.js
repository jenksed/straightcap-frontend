import React from 'react';
import './BlogPosts.css'; // Import the CSS file

const BlogPosts = () => {
    const blogPosts = [
        { id: 1, title: "The Rise of Local Rap", content: "Exploring the surge of interest in local rap scenes across the country." },
        { id: 2, title: "Interview with a Rapper", content: "Insights from an in-depth interview with a prominent Lansing rapper." },
        { id: 3, title: "Hip Hop and Community", content: "How hip hop music influences community development and cohesion." }
    ];

    return (
        <div className="blogPosts">
            <h2>Latest Blog Posts</h2>
            {blogPosts.map(post => (
                <div key={post.id} className="blogPost">
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogPosts;
