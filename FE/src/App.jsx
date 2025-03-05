import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<h1>Error</h1>}>
      <Route path="/" >
        <Route index element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='home' element={<Home />} />
      </Route>
    </Route>
  ),
  { basename: "" }
);

function App() {

  return (
    <>
      <div>
        <ToastContainer />
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
