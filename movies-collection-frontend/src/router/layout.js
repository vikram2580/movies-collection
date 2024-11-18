import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { ROUTES } from "./routes";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export const PrivateLayout = () => {
  const isLoggedIn = useSelector((state) => state?.auth?.data?.success);

  return isLoggedIn ? (
    <Fragment>
      <Navbar />
      <div className=" font-display min-h-screen text-secondary-500 overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </Fragment>
  ) : (
    <Navigate to={ROUTES.HOME} />
  );
};

export const PublicLayout = () => {
  const isLoggedIn = useSelector((state) => state?.auth?.data?.success);

  return isLoggedIn ? (
    // <Navigate to={ROUTES.MOVIES} />
    <Fragment>
      <Navbar />
      <div className="font-display min-h-screen text-secondary-500 overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </Fragment>
  ) : (
    <Fragment>
      <Navbar />
      <div className="font-display min-h-screen text-secondary-500  overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </Fragment>
  );
};
