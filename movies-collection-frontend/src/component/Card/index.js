import React from "react";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as WatchIcon } from "feather-icons/dist/icons/watch.svg";
import { ReactComponent as CalendarIcon } from "feather-icons/dist/icons/calendar.svg";


const Card = ({ items, editMovie, deleteMovie }) => {
  // {
  //     movieID: 10,
  //     title: "Star Trek II: The Wrath of Khan",
  //     studio: "Paramount Pictures",
  //     genres: ["Action", "Adventure", "Sci-Fi"],
  //     directors: ["Nicholas Meyer"],
  //     writers: ["Gene Roddenberry", "Jack B. Sowards", "Harve Bennett"],
  //     actors: ["William Shatner", "Leonard Nimoy", "DeForest Kelley"],
  //     year: 1982,
  //     length: 113,
  //     shortDescription:
  //       "With the assistance of the Enterprise crew, Admiral Kirk must stop an old nemesis, Khan Noonien Singh, from using the life-generating Genesis Device as the ultimate weapon.",
  //     mpaRating: "PG",
  //     criticsRating: 7.7,
  //   },
  return (
    <div className="relative ">
      <div className="max-w-screen-xl mx-auto py-8 lg:py-12">
        <div className="h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none">
          <div
            className={`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`}
            style={{ backgroundImage: `url(${items?.image})` }}
          ></div>
          <div className="py-6 sm:px-10 sm:py-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div className="relative group">
                <h5 className="text-2xl font-bold text-teal-800">
                  {items?.title.length > 12
                    ? `${items.title.slice(0, 12)}...`
                    : items.title}
                </h5>
                <div
                  className="absolute z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 px-3 py-2 text-sm font-medium text-white bg-gray-500 rounded-lg shadow-lg dark:bg-gray-700 text-nowrap"
                  style={{
                    top: "-100%",
                  }}
                >
                  {items.title}
                </div>
              </div>
              <div className="flex items-center sm:ml-4 mt-2 sm:mt-0">
                <StarIcon className="w-6 h-6 text-yellow-500 fill-current" />
                <span className="ml-2 font-bold">{items.criticsRating}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row mt-2 sm:mt-4">
              <div className="flex items-center mr-6 my-2 sm:my-0">
                <div className="inline-block rounded-full p-2 bg-gray-700 text-gray-100">
                  <CalendarIcon className="w-3 h-3" />
                </div>
                <div className="ml-2 text-sm font-semibold text-gray-800">
                  {items.year}
                </div>
              </div>

              <div className="flex items-center mr-6 my-2 sm:my-0">
                <div className="inline-block rounded-full p-2 bg-gray-700 text-gray-100">
                  <WatchIcon className="w-3 h-3" />
                </div>
                <div className="ml-2 text-sm font-semibold text-gray-800">
                  {`${items.length} Minutes`}
                </div>
              </div>
            </div>
            <p className="text-sm leading-loose mt-2 sm:mt-4 h-24 overflow-y-scroll scrollbar-hide">
              {items.shortDescription}
            </p>
            <div className="my-4 md:my-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <button
                onClick={editMovie}
                className=" lg:mx-0 px-8 py-3 bg-orange-400 text-gray-100 hocus:bg-orange-700 hocus:text-gray-200 hover:bg-orange-500 border-b-0 h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none lg"
              >
                {"Update"}
              </button>
              <button
                onClick={deleteMovie}
                className=" lg:mx-0 px-8 py-3 bg-orange-400 text-gray-100 hocus:bg-orange-700 hocus:text-gray-200 hover:bg-orange-500 border-b-0 h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none lg"
              >
                {"Delete"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
