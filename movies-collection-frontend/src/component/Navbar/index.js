import React from "react";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { handleLogout } from "../../redux/actions/auth";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/routes";

export default function Navbar() {
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const isLoggedIn = useSelector((state) => state?.auth?.data?.success);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const logout = () => {
    dispatch(handleLogout());
    navigate(ROUTES.HOME, { replace: true });
  };

  return (
    <section className="transform-none">
      {" "}
      <div className=" bg-teal-800 text-gray-100">
        <div className="`max-w-screen-2xl mx-auto">
          <div className="max-w-none py-8 mx-8 px-8">
            <header className="flex justify-between items-center max-w-screen-xl mx-auto header-light">
              <nav className=" hidden lg:flex flex-1 justify-between items-center ">
                <Link className="flex items-center font-black border-b-0 text-2xl! ml-0!">
                  logo
                  {/* <img className="w-10 mr-3" /> */}
                </Link>
                <div className="inline-block" key={1}>
                  <Link
                    className="text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-orange-500 hocus:text-orange-500"
                    to={ROUTES.HOME}
                  >
                    Home
                  </Link>
                  <Link
                    className="text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-orange-500 hocus:text-orange-500"
                    to={ROUTES.MOVIES}
                  >
                    Movies
                  </Link>
                  <Link
                    className="text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-orange-500 hocus:text-orange-500"
                    to={ROUTES.ABOUT}
                  >
                    About
                  </Link>
                  <Link
                    className="text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-orange-500 hocus:text-orange-500"
                    to={ROUTES.CONATCT}
                  >
                    Contact
                  </Link>
                  {!isLoggedIn && (
                    <Link
                      className="lg:mx-2 px-8 py-3 bg-orange-400 text-gray-100 hocus:bg-orange-500 hocus:text-gray-200 hover:bg-orange-500 border-b-0 rounded-full lg"
                      to={ROUTES.SIGNIN}
                    >
                      {"Sign In"}
                    </Link>
                  )}

                  {isLoggedIn ? (
                    <Link
                      className=" lg:mx-0 px-8 py-3  bg-orange-400 text-gray-100 hocus:bg-orange-700 hocus:text-gray-200 hover:bg-orange-500  border-b-0 rounded-full lg"
                      onClick={() => logout()}
                    >
                      {"Logout"}
                    </Link>
                  ) : (
                    <Link
                      className=" lg:mx-0 px-8 py-3 bg-orange-400 text-gray-100 hocus:bg-orange-700 hocus:text-gray-200 hover:bg-orange-500 border-b-0 rounded-full lg"
                      to={ROUTES.SIGNUP}
                    >
                      {"SignUp"}
                    </Link>
                  )}
                </div>
              </nav>
              <nav className="flex flex-1 items-center justify-between lg:hidden ">
                <Link className="flex items-center font-black border-b-0 text-2xl! ml-0! ">
                  logo
                  {/* <img className="w-10 mr-3" /> */}
                </Link>
                <motion.div
                  initial={{ y: "-150%", display: "none" }}
                  animate={animation}
                  className="lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white flex flex-col items-center"
                  key={1}
                >
                  <div className="flex flex-col items-center">
                    <Link
                      to={ROUTES.HOME}
                      className="text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-orange-400 hocus:text-orange-500"
                    >
                      Home
                    </Link>
                    <Link
                      to={ROUTES.MOVIES}
                      className="text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-orange-400 hocus:text-orange-500"
                    >
                      Movies
                    </Link>
                    <Link
                      to={ROUTES.MOVIES}
                      className="text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-orange-400 hocus:text-orange-500"
                    >
                      About
                    </Link>
                    <Link
                      to={ROUTES.CONATCT}
                      className="lg:ml-12! text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-orange-400 hocus:text-orange-500 "
                    >
                      Contact
                    </Link>
                    {!isLoggedIn && (
                      <Link
                        to={ROUTES.SIGNIN}
                        className=" lg:mx-0 my-2 px-8 py-3 bg-orange-400 hover:bg-orange-500 text-gray-100 hocus:bg-orange-700 hocus:text-gray-200 focus:shadow-outline border-b-0 rounded-full lg"
                      >
                        {"Sign In"}
                      </Link>
                    )}
                    {isLoggedIn ? (
                      <Link
                        onClick={() => logout()}
                        className=" lg:mx-0 px-8 py-3 bg-orange-400 hover:bg-orange-500 text-gray-100 hocus:bg-orange-700 hocus:text-gray-200 focus:shadow-outline border-b-0 rounded-full lg"
                      >
                        {"Logout"}
                      </Link>
                    ) : (
                      <Link
                        to={ROUTES.SIGNUP}
                        className=" lg:mx-0 px-8 py-3 bg-orange-400 hover:bg-orange-500 text-gray-100 hocus:bg-orange-700 hocus:text-gray-200 focus:shadow-outline border-b-0 rounded-full lg"
                      >
                        {"SignUp"}
                      </Link>
                    )}
                  </div>
                </motion.div>
                <button
                  onClick={toggleNavbar}
                  className={`${
                    showNavLinks ? "open text-gray-900" : "closed "
                  } lg:hidden z-20 focus:outline-none hocus:text-orange-500 transition duration-500`}
                >
                  {showNavLinks ? (
                    <CloseIcon tw="w-6 h-6" />
                  ) : (
                    <MenuIcon tw="w-6 h-6" />
                  )}
                </button>
              </nav>
            </header>
          </div>
        </div>
      </div>
    </section>
  );
}
