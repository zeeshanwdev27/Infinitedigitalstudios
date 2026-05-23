import React from "react"
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./layout/Layout.jsx"

const Home = React.lazy(()=> import('./pages/Home/Home'))



const App = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path="/" element={<Layout />}>

     <Route index element={<Home />} />

     {/* HighRisk */}
     {/* <Route path="/highrisk" element={<HighRisk />} />   */}

     
     </Route>
    </>
  )
)
export default App