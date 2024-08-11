// UpcomingEvents.js
import React from 'react';

const UpcomingEvents = () => {
    const events = [
        { id: 1, name: "Lansing Rap Battle", date: "2024-09-15", location: "Downtown Club" },
        { id: 2, name: "Album Release Party", date: "2024-10-20", location: "East Lansing Venue" },
        { id: 3, name: "Hip Hop Workshop", date: "2024-11-05", location: "Community Arts Center" }
    ];

    return (
        <div className="upcomingEvents">
            <h2>Upcoming Events</h2>
            {events.map(event => (
                <div key={event.id} className="event">
                    <h3>{event.name}</h3>
                    <p>Date: {event.date}</p>
                    <p>Location: {event.location}</p>
                </div>
            ))}
        </div>
    );
};

export default UpcomingEvents;
