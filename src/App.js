import React from 'react'
 import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Events from "./Pages/Events";
import EventDetails from "./Pages/EventDetails";
import EditEvent from "./Pages/EditEvent";
import NewEvent from "./Pages/NewEvent";
import Service from "./Pages/Service";
import RouteLayout from "./Route";
import EventsRootLayout from './Pages/EventsRoot';

function App() {

  
const Router = createBrowserRouter([
  {path:'/', element:<RouteLayout />, children:[
  {index:true, element : <Home />},
  {path:'Aboutus',element : <Aboutus />},
  {path:'Events',
  element : <EventsRootLayout />,
  children:[
  {index:true, element : <Events />},
  {path:':eventsId',element : <EventDetails />},
  {path:'new',element : <NewEvent />},
  {path:':eventsId/edit',element : <EditEvent />},
  ]},
  
  {path:'Service',element : <Service />},
  {path:'Service/:id',element : <Service />},
]}

])


  return <RouterProvider router={Router} />
}

export default App;
