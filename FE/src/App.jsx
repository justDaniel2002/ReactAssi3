import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<h1>Error</h1>}>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
      </Route>
    </Route>
  ),
  { basename: "" }
);

function App() {

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
