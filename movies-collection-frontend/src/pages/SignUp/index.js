import React from "react";
import twitterIconImageSrc from "../../images/twitter-icon.png";
import googleIconImageSrc from "../../images/google-icon.png";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import { Formik } from "formik";
import { signup } from "../../apis/authApis";

const socialButtons = [
  {
    iconImageSrc: googleIconImageSrc,
    text: "Sign Up With Google",
    url: "https://google.com",
  },
  {
    iconImageSrc: twitterIconImageSrc,
    text: "Sign Up With Twitter",
    url: "https://twitter.com",
  },
];

const SignUp = () => {
  const defaultValues = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    username: "",
    password: "",
  };
  const navigate = useNavigate();
  const onSubmit = (payload) => {
    signup(payload)
      .then((res) => console.log("Sign Up response", res))
      .catch((err) => {
        throw err;
      })
      .finally((res) => navigate(ROUTES.HOME, { replace: true }));
  };

  return (
    <div className="`min-h-screen bg-gray-100 text-white font-medium flex justify-center relative">
      <div className="max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          {/* <a>
            <img className="h-12 mx-auto"></img>
          </a> */}
          <div className="mt-12 flex flex-col items-center">
            <h2 className="text-2xl xl:text-3xl text-teal-800 font-extrabold">
              Sign Up for MCWA
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
              <Formik onSubmit={onSubmit} initialValues={defaultValues}>
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
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0"
                      type="text"
                      placeholder="First Name"
                      id="firstName"
                      name="firstName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0"
                      type="text"
                      placeholder="Last Name"
                      id="lastName"
                      name="lastName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0"
                      type="email"
                      placeholder="Email"
                      id="emailAddress"
                      name="emailAddress"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.emailAddress}
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0"
                      type="text"
                      placeholder="Username"
                      id="username"
                      name="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0"
                      type="password"
                      placeholder="Password"
                      id="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <button
                      className="mt-5 tracking-wide font-semibold bg-orange-400 text-gray-100 w-full py-4 rounded-lg hover:bg-orange-500 transition-all duration-300 ease-in-out flex items-center justify-center "
                      type="submit"
                    >
                      <SignUpIcon className="w-6 h-6 -ml-2" />
                      <span className="ml-3">{"Sign Up"}</span>
                    </button>
                    <p className="mt-6 text-xs text-gray-600 text-center">
                      {"I agree to abide by MCWA's"} &nbsp;
                      <a href="/" className="border-b border-gray-500 border-dotted"></a>
                      {"Terms of Service"}&nbsp;
                      {"and it's"} &nbsp;
                      <a className="border-b border-gray-500 border-dotted">
                        {"Privacy Policy"}
                      </a>
                    </p>

                    <p className="mt-8 text-sm text-gray-600 text-center">
                      {"Already have an account?"}&nbsp;
                      <Link
                        to={ROUTES.SIGNIN}
                        className="border-b border-gray-500 border-dotted"
                      >
                        Sign In
                      </Link>
                    </p>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center">
          <div
            className={`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat bg-signup-image`}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
