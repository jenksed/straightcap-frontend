// src/client.js

import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Initialize the Sanity client
const client = sanityClient({
  projectId: 'oxiw1agn',  // your project ID
  dataset: 'production',  // or your dataset name
  useCdn: false,           // `false` if you want fresh data
  apiVersion: '2021-03-25' // use a UTC date string
});

// Configure the image URL builder to use the client
const builder = imageUrlBuilder(client);

// Function to generate image URLs from Sanity image records
export function urlFor(source) {
  return builder.image(source);
}

// Export the client for other parts of the app to use
export default client;
