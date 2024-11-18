import logo from "./logo.svg";
import "./App.css";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Router from "./router";

const toastConfig = {
  autoClose: 2500,
  position: "bottom-right",
  transition: Slide,
  hideProgressBar: true,
};

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
        <ToastContainer {...toastConfig} />
      </PersistGate>
    </Provider>
  );
}

export default App;
