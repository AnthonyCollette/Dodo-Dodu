import './assets/scss/main.scss';
import { Navigate, Route, Router, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Homepage from './views/Homepage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import ProfilPage from './views/ProfilPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from './store/store';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Error404 from './views/Error404';

function App() {

  const dispatch = useDispatch()

  onAuthStateChanged(getAuth(), (user) => {
    if (user === null) {
      dispatch(setAuth(false))
    } else {
      dispatch(setAuth(true))
    }
  })



  const checkAuth = useSelector((state) => state?.user?.isAuthenticated)
  console.log(checkAuth)

  const authRoutes = [{
    path: "/",
    element: <Homepage />,
  }, {
    path: "/login",
    element: <LoginPage />
  }, {
    path: "/register",
    element: <RegisterPage />
  }, {
    path: "/profile",
    element: <ProfilPage />,
  }, {
    path: "*",
    element: <Error404 />
  }]
  const guestRoutes = [{
    path: "/",
    element: <Homepage />,
  }, {
    path: "/login",
    element: <LoginPage />
  }, {
    path: "/register",
    element: <RegisterPage />
  }, {
    path: "*",
    element: <Error404 />
  }]

  const router = () => {
    if (checkAuth === true) {
      return createBrowserRouter(authRoutes)
    } else {
      return createBrowserRouter(guestRoutes)
    }
  }

  return (

    <div className="App">
      <RouterProvider router={router()} />
    </div>
  );

}

export default App;
