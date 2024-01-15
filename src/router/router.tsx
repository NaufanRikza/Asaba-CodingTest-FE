import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../page/Dashboard";
import AddProduct from "../page/AddProduct";
import AppWrapper from "../components/organism/AppWrapper";
import EditProduct from "../page/EditProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/edit-product",
        element: <EditProduct />,
      },
    ],
  },
]);

export default router;
