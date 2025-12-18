import Login from "./Login";
import Browse from "./Browse";
import Signup from "./Signup";
import { createBrowserRouter, RouterProvider } from "react-router";

const Body = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    }
  ]);
  return (
    <RouterProvider router={appRoutes}>
      <div>
        <Login />
        <Browse />
      </div>
    </RouterProvider>
  );
};

export default Body;
