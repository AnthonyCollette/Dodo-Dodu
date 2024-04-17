import './assets/scss/main.scss';
import { BrowserRouter, Route, Router, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Homepage from './views/Homepage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import ProfilPage from './views/DashboardPage';
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Error404 from './views/Error404';
import Loading from './views/Loading';
import Rules from './views/Rules';
import Game from './views/Game';
import PrivateRoutes from './components/auth/PrivateRoutes';
import GuestRoutes from './components/auth/GuestRoutes';
import DashboardPage from './views/DashboardPage';

function App() {

  return (

    <div className="App">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route element={<Homepage />} path='/' exact />
            <Route element={<Rules />} path='/rules' exact />
            <Route element={<Game />} path='/game' exact />
            <Route element={<PrivateRoutes />}>
              <Route element={<DashboardPage />} path='/dashboard' exact />
            </Route>
            <Route element={<GuestRoutes />}>
              <Route element={<LoginPage />} path='/login' exact />
            </Route>
            <Route element={<Error404 />} path='*' />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );

}

export default App;
