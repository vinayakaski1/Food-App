import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";

import Footer from "./Footer";
import Login from "./Components/Login";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = props => {
  return (
    <Provider store={appStore}>
      <div className="relative min-h-[100vh]">
        <Header />
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter}>
      <AppLayout />
    </RouterProvider>
  </Provider>
);
