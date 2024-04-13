import './assets/scss/main.scss';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from './views/Homepage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import ProfilPage from './views/ProfilPage';

function App() {

  const router = createBrowserRouter([
    {
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
      element: <ProfilPage />
    }
  ]);

  return (

    <div className="App">
        <RouterProvider router={router} />
    </div>
  );

}

export default App;
