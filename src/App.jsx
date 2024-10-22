import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import { Layout, Home, About } from "./routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  ),
  {
    basename: "/FAU-IEEE"
  }
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;