import './assets/scss/main.scss';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from './views/Homepage';
import Questions from './views/Questions';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    }, {
      path: "/questions",
      element: <Questions />
    }
  ]);

  return (
    
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
