import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/routes";

const Contact = () => {
  const navigate = useNavigate()
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row justify-between max-w-screen-xl md:px-6 mx-auto py-20 md:py-24">
        <div className="w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-5/12 flex-shrink-0 h-80 md:h-auto">
          <div className="w-full max-w-md mx-auto md:max-w-none md:mx-0 `md:w-7/12 mt-16 md:mt-0 md:mr-12 lg:mr-16 md:order-first">
            <div className="lg:py-8 text-center md:text-left">
              <h5 className="font-bold text-teal-800 text-center md:text-left">
                {"Contact Us"}
              </h5>
              <h2 className="sm:text-5xl font-black tracking-wide  mt-4  text-left text-3xl  lg:text-5xl  md:text-left leading-tight">
                <>
                  Feel free to <span tw="text-primary-500">get in touch</span>
                  <wbr /> with us.
                </>
              </h2>
              <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100">
                {
                  "Have questions, feedback, or suggestions? Whether you're experiencing an issue, have a feature request, or just want to say hello, our team is here to help!"
                }
              </p>
              <form
                className="mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0"
                onSubmit={() => navigate(ROUTES.CONATCT,{replace:true}) }
              >
                <input
                  className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                />
                <input
                  className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                />
                <input
                  className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                />
                <textarea
                  className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500 h-24"
                  name="message"
                  placeholder="Your Message Here"
                />
                <button
                  className="px-8 py-3 mt-6 font-bold rounded  bg-orange-400 text-gray-100 hocus:bg-orange-700 hover:bg-orange-500 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300"
                  type="submit"
                  disabled
                >
                  {"Send"}
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="md:w-5/12 flex-shrink-0 h-80 md:h-auto bg-contact-image">
          <div className="rounded bg-contain bg-no-repeat bg-center h-full bg-contact-image align-middle">
            <img src={EmailIllustrationSrc} />
          </div>
        </div> */}
         <div className="sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center">
          <div
            className={`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat bg-bgcontact-image`}
          ></div>
          </div>
      </div>
    </div>
  );
};

export default Contact;
