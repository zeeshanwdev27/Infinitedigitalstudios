import React from "react"
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./layout/Layout.jsx"

const Home = React.lazy(()=> import('./pages/Home/Home'))
const AboutUs = React.lazy(()=> import('./pages/AboutUs/AboutUs'))



const App = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path="/" element={<Layout />}>

     <Route index element={<Home />} />

     {/* HighRisk */}
     <Route path="/about-us" element={<AboutUs />} />  

     
     </Route>
    </>
  )
)
export default App