import React from "react";
import { Formik } from "formik";
import { useDispatch} from "react-redux";
import { loginSchema } from "../../constants/formSchema";
import { handleLogin } from "../../redux/actions/auth";
import { ROUTES } from "../../router/routes";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const defaultValues = {
  username: "",
  password: "",
};
const SignIn = () => {

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onSubmit = (payload) => {
    dispatch(handleLogin(payload));
    navigate(ROUTES.HOME, { replace: true });
  };
  return (
    // <div className="text-center">
    //   <div className="  min-h-screen flex-col flex items-center justify-center">
    //     <div className="w-full max-w-xs">
    //       <Formik
    //         onSubmit={onSubmit}
    //         initialValues={defaultValues}
    //         // validationSchema={loginSchema}
    //       >
    //         {({
    //           values,
    //           errors,
    //           touched,
    //           handleChange,
    //           handleBlur,
    //           handleSubmit,
    //         }) => (
    //           <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
    //             <div className="mb-4">
    //               <label
    //                 className="block text-gray-700 text-sm font-bold mb-2"
    //                 for="username"
    //               >
    //                 Username
    //               </label>
    //               <input
    //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //                 id="username"
    //                 type="text"
    //                 placeholder="Username"
    //                 name="username"
    //                 onChange={handleChange}
    //                 onBlur={handleBlur}
    //                 value={values.username}
    //               />
    //             </div>
    //             <div className="mb-6">
    //               <label
    //                 className="block text-gray-700 text-sm font-bold mb-2"
    //                 for="password"
    //               >
    //                 Password
    //               </label>
    //               <input
    //                 className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    //                 id="password"
    //                 name="password"
    //                 type={passwordVisibility ? "text" : "password"}
    //                 onChange={handleChange}
    //                 onBlur={handleBlur}
    //                 value={values.password}
    //                 placeholder="Password"
    //               />
    //               <p className="text-red-500 text-xs italic">
    //                 Please choose a password.
    //               </p>
    //             </div>
    //             <div className="flex items-center justify-between">
    //               <button
    //                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //                 type="submit"
    //               >
    //                 Sign In
    //               </button>
    //               <a
    //                 className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
    //                 href="#"
    //               >
    //                 Forgot Password?
    //               </a>
    //             </div>
    //           </form>
    //         )}
    //       </Formik>
    //       <p className="text-center text-gray-500 text-xs">
    //         &copy;2020 Acme Corp. All rights reserved.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="`min-h-screen bg-gray-100 text-white font-medium flex justify-center relative">
      <div className="max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          {/* <a>
            <img className="h-12 mx-auto"></img>
          </a> */}
          <div className="mt-12 flex flex-col items-center">
            <h2 className="text-2xl xl:text-3xl text-teal-800 font-extrabold">
              Sign In for MCWA
            </h2>
            {/* <div className="flex flex-col items-center">
              {socialButtons.map((socialButton, index) => (
                <a
                  className="w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`"
                  key={index}
                  href={socialButton.url}
                >
                  <span className="bg-white p-2 rounded-full">
                    <img
                      src={socialButton.iconImageSrc}
                      className="w-4"
                      alt=""
                    />
                  </span>
                  <span className="ml-3">{socialButton.text}</span>
                </a>
              ))}
            </div> */}
            {/* <div className="my-12 border-b text-center relative">
              <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent">
                Or Sign up with your e-mail
              </div>
            </div> */}
            <div className="w-full flex-1 mt-8">
              <Formik
                onSubmit={onSubmit}
                initialValues={defaultValues}
                validationSchema={loginSchema}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <form className="mx-auto max-w-xs" onSubmit={handleSubmit}>
                    <input
                      className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border placeholder-gray-500 text-sm focus:outline-none focus:bg-white mt-5 first:mt-0 ${
                        errors.username && touched.username
                          ? "border-red-600 focus:border-red-400"
                          : "border-gray-200 focus:border-gray-400"
                      }`}
                      type="text"
                      placeholder="Username"
                      id="username"
                      name="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                    />

                    {errors.username && touched.username ? (
                      <p className="text-xs text-red-600 ml-1">
                        <span className="border-red-600 ">
                          {errors.password}
                        </span>
                      </p>
                    ) : (
                      ""
                    )}
                    <input
                      className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border placeholder-gray-500 text-sm focus:outline-none focus:bg-white mt-5 first:mt-0 ${
                        errors.password && touched.password
                          ? "border-red-600 focus:border-red-400"
                          : "border-gray-200 focus:border-gray-400"
                      }`}
                      type="password"
                      id="password"
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password ? (
                      <p className="text-xs text-red-600 ml-1">
                        <span className="border-red-600 ">
                          {errors.password}
                        </span>
                      </p>
                    ) : (
                      ""
                    )}
                    <button className="mt-5 tracking-wide font-semibold bg-orange-400 text-gray-100 w-full py-4 rounded-lg hover:bg-orange-500 transition-all duration-300 ease-in-out flex items-center justify-center ">
                      <LoginIcon className="w-6 h-6 -ml-2" />
                      <span className="ml-3">{"Sign In"}</span>
                    </button>
                  </form>
                )}
              </Formik>
              <p className="mt-6 text-xs text-gray-600 text-center">
                <a href="/" className="border-b border-gray-500 border-dotted">
                  Forgot Password ?
                </a>
              </p>
              <p className="mt-8 text-sm text-gray-600 text-center">
                Dont have an account?{" "}
                <Link
                  to={ROUTES.SIGNUP}
                  className="border-b border-gray-500 border-dotted"
                >
                  {"Sing Up"}
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center">
          <div
            className={`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat bg-signin-image`}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
