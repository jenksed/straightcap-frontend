import React, { useEffect, useState } from 'react';
import client from '../../../client'; // Make sure to import your Sanity client
import './BlogPosts.css'; // Import the CSS file
import BlockContent from '@sanity/block-content-to-react'; // Import BlockContent to render Sanity blocks

const BlogPosts = () => {
    const [blogPosts, setBlogPosts] = useState([]); // State to hold blog posts
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        // Fetch blog posts from Sanity
        const fetchBlogPosts = async () => {
            try {
                const data = await client.fetch(`*[_type == "blog"]{ _id, title, publishedAt, author->{name}, image, content }`);
                setBlogPosts(data);
                setIsLoading(false); // Set loading state to false after fetching
            } catch (error) {
                console.error("Error fetching blog posts:", error);
                setError(error);
                setIsLoading(false); // Set loading state to false on error
            }
        };

        fetchBlogPosts();
    }, []); // Empty dependency array means this effect runs once on mount

    if (isLoading) {
        return <div>Loading...</div>; // Or a more visually appealing loading indicator
    }

    if (error) {
        return <div>Error: {error.message}</div>; // Display an error message if fetching fails
    }

    return (
        <div className="blogPosts">
            <h2>Latest Blog Posts</h2>
            {blogPosts.map(post => (
                <div key={post._id} className="blogPost">
                    <h3>{post.title}</h3>
                    {post.image && <img src={post.image.asset.url} alt={post.title} />} {/* Displaying the image */}
                    <p>Published on: {new Date(post.publishedAt).toLocaleDateString()}</p> {/* Displaying the publication date */}
                    <p>Author: {post.author?.name}</p> {/* Displaying the author's name */}
                    <BlockContent 
                        blocks={post.content} 
                        projectId={client.config.projectId} 
                        dataset={client.config.dataset} 
                    /> {/* Rendering the content with BlockContent */}
                </div>
            ))}
        </div>
    );
};

export default BlogPosts;
