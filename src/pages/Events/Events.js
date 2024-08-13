// pages/Events/Events.js
import React from 'react';
import './Events.css';

const Events = () => {
  return (
    <div className="events-container">
      <h1>Events</h1>
      {/* Example event entries */}
      <div className="event-entry">
        <h2>Event Title 1</h2>
        <p>Date: January 1, 2025</p>
        <p>This is a summary of event 1.</p>
      </div>
      <div className="event-entry">
        <h2>Event Title 2</h2>
        <p>Date: February 15, 2025</p>
        <p>This is a summary of event 2.</p>
      </div>
    </div>
  );
};

export default Events;
