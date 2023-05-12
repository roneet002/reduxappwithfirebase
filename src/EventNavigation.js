import React from "react";
import { Link, useParams } from "react-router-dom";

const EventNavigation = () => {
  const params = useParams();
  return (
    <div>
      <h1>All Events</h1>
      <ul>
        <li>
          <Link to={"new"}>New Event</Link>
        </li>
        <li>
          <Link to={`${params.eventsId}/edit`}>Edit Event</Link>
        </li>
      </ul>
    </div>
  );
};

export default EventNavigation;
