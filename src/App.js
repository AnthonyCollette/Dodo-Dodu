import './assets/scss/main.scss';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from './views/Homepage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';

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
    }
  ]);

  return (

    <div className="App">
        <RouterProvider router={router} />
    </div>
  );

}

export default App;
