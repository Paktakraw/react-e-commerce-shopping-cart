import { useSelector, useDispatch } from "react-redux";
import CheckOut from "./components/CheckOut.jsx";
import Navbar from "./components/Navbar.jsx";
import ShoppingContainer from "./components/ShoppingContainer.jsx";
import { useEffect } from "react";
import { total } from "./components/State/Slice/CartSlice.jsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ItemDetail from "./components/ItemDetail.jsx";

const Layout = () => {
  const { isOpen } = useSelector((state) => state.checkout);
  return (
    <div>
      <Navbar />
      {isOpen && <CheckOut />}
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ShoppingContainer />,
      },
      {
        path: "/ItemDetail/:id",
        element: <ItemDetail />,
      },
    ],
  },
]);
function App() {
  // เมื่อ isOpen เป็น true CheckOut จะถูกแสดงบนหน้าเว็บ
  const { isOpen } = useSelector((state) => state.checkout);
  const { cartItem } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(total());
  }, [cartItem]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
