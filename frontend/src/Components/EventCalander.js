import React, {useState, useEffect} from 'react';

function EventCalander() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
   
    fetch('/api/events')
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  return(
    <div>
    <h2>Event Calendar</h2>
    <ul>
      {events.map((event) => (
        <li key={event._id}>
          <h3>{event.event_name}</h3>
          <p>Date: {event.date}</p>
          <p>Time: {event.time}</p>
          <p>Location: {event.location}</p>
          <p>Description: {event.description}</p>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default EventCalander;