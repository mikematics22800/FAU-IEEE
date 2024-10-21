import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, Home, About } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App
