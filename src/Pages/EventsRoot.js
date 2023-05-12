import React from "react";
import EventNavigation from "../EventNavigation";
import { Outlet } from "react-router-dom";

const EventsRootLayout = () => {
  return (
    <div>
      <EventNavigation />
      <Outlet />  
    </div>
  );
};

export default EventsRootLayout;
