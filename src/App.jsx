import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About } from "./routes";

const router = createBrowserRouter([
  {
    index: true,
    element: <Home/>,
  },
  {
    path: "about",
    element: <About/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App
