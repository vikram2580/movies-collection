import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="relative bg-teal-900 text-gray-100 ">
      <div className="max-w-screen-xl mx-auto py-12 lg:py-16">
        <div className="flex items-center justify-center flex-col px-8">
          <div className="flex items-center justify-center md:justify-start">
            <img className="w-8" />
            <h5 className="ml-2 text-2xl font-black tracking-wider">
              {"MCWA"}
            </h5>
          </div>
          <div className="mt-8 font-semibold flex flex-wrap justify-center items-center flex-col sm:flex-row">
            <Link className="border-b-2 border-transparent hocus:text-gray-300 hover:border-orange-500 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4">
              {"Home"}{" "}
            </Link>
            <Link className="border-b-2 border-transparent hocus:text-gray-300 hover:border-orange-500 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4">
              {"Movies"}{" "}
            </Link>
            <Link className="border-b-2 border-transparent hocus:text-gray-300 hover:border-orange-500 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4">
              {"About"}{" "}
            </Link>
            <Link className="border-b-2 border-transparent hocus:text-gray-300 hover:border-orange-500 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4">
              {"Contact"}{" "}
            </Link>
          </div>
          <div className="mt-10">
            <Link
              className={
                "cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4"
              }
            >
              <FacebookIcon className="w-5 h-5" />
            </Link>
            <Link
              className={
                "cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4"
              }
            >
              <TwitterIcon className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-center mt-10 font-medium tracking-wide text-sm text-gray-100">
            {" "}
            &copy;
            {` Copyright ${currentYear}, MCWA Inc. All Rights Reserved.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
