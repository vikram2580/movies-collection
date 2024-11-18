import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../router/routes";
const Home = () => {

 

  return (
    // <section className="transform-none">
    //   {" "}
    //   <div className=" mx-8 px-8 bg-primary-500 text-gray-100">
    //     <div className="`max-w-screen-2xl mx-auto">
    //       <div className="relative">
    //         <div className="py-20 lg:py-24">
    //           <div className="flex items-center flex-col lg:flex-row">
    //             <div className="text-center lg:text-left">
    //               <h2 className="text-4xl sm:text-5xl font-black tracking-wide text-center max-w-3xl lg:max-w-4xl lg:text-left leading-tight"></h2>
    //               <p className="mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl mt-4 max-w-2xl text-gray-100 lg:text-base mx-auto lg:mx-0"></p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div
      className="relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1536300007881-7e482242baa5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80)`,
      }}
    >
      <div className="z-10 absolute inset-0 bg-black opacity-75">
        <div className="z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col">
          <div className="px-4 flex flex-1 flex-col justify-center items-center">
            <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0">
              Create Your Collection,
              <br />
              Share Your Passion!
            </h1>
            <Link
              to={ROUTES.MOVIES}
              className="rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4  font-bold shadow transition duration-300 bg-orange-400 hover:bg-orange-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline"
            >
              {"Collections"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
