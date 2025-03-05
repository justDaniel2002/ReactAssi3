import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<h1>Error</h1>}>
      <Route path="/" >
        <Route index element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
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
