import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./UI/Home";
import Error from "./UI/Error";
import Menu, { Loader as menuLoader } from "./Menu Feature/Menu";
import Cart from "./Cart Feature/Cart";
import "./index.css";
import CreateOrder, {
  action as createOrderAction,
} from "./Order Feature/CreateOrder";
import Order, { loader as orderLoader } from "./Order Feature/Order";
import AppLayout from "./UI/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
