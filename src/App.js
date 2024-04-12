import './assets/scss/main.scss';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from './views/Homepage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    }
  ]);

  return (
    
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
