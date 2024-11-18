// import React, { useLayoutEffect } from "react";
// import { ROUTES } from "./routes";
// import {
//   BrowserRouter,
//   Navigate,
//   Route,
//   Routes,
//   useLocation,
// } from "react-router-dom";
// import { PrivateLayout, PublicLayout } from "./layout";
// import SignUp from "../pages/SignUp";
// import SignIn from "../pages/SignIn";
// import Home from "../pages/Home";
// import Movies from "../pages/Movies";
// //Scroll to top on every route change
// const ScrollToTop = ({ children }) => {
//   const location = useLocation();
//   useLayoutEffect(() => {
//     document.documentElement.scrollTo(0, 0);
//   }, [location.pathname]);
//   return children;
// };

// const Router = () => {
//   return (
//     <BrowserRouter>
//       <ScrollToTop>
//         <Routes>
//           <Route element={<PublicLayout />}>
//             <Route path={ROUTES.SIGNIN} element={<SignIn />} />
//             <Route path={ROUTES.SIGNUP} element={<SignUp />} />
//             <Route path={ROUTES.HOME} element={<Home/>}/>
//           </Route>
//           <Route element={<PrivateLayout />}>
//           <Route path={ROUTES.HOME} element={<Home/>}/>
//             <Route path={ROUTES.MOVIES} element={<Movies />} />
//           </Route>
//           <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
//         </Routes>
//       </ScrollToTop>
//     </BrowserRouter>
//   );
// };

// export default Router;


import React, { useLayoutEffect } from "react";
import { ROUTES } from "./routes";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { PrivateLayout, PublicLayout } from "./layout";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import AddEditMovies from "../pages/AddEditMovies";
import About from "../pages/About";
import Contact from "../pages/Contact";
//Scroll to top on every route change
const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path={ROUTES.SIGNIN} element={<SignIn />} />
            <Route path={ROUTES.SIGNUP} element={<SignUp />} />
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.MOVIES} element={<Movies />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.CONATCT} element={<Contact />} />
          </Route>
          <Route element={<PrivateLayout />}>
            {/* <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.CONATCT} element={<Contact />} /> */}
            <Route path={ROUTES.MOVIES}>
              <Route path={ROUTES.ADD_MOVIE} element={<AddEditMovies />} />
              <Route path={ROUTES.EDIT_MOVIE} element={<AddEditMovies />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to={ROUTES.SIGNIN} />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;