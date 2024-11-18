import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import Card from "../../component/Card";
import { deleteMovieById, listMovieApi } from "../../apis/moviesApi";
import { APIS } from "../../apis/endpoints";
import DesignIllustration from "../../images/design-illustration.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/dot-pattern.svg";
import { useSelector } from "react-redux";

const Movies = () => {
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state?.auth?.data?.success);
  const [moviesList, setMoviesList] = useState([]);
  const [onDelete, setOnDelete] = useState(false);
  useEffect(() => {
    listMovieApi(APIS.MOVIES_LIST).then((res) => {
      let data = res?.data;
      setMoviesList(data);
    });
  }, [onDelete]);
  const editMovie = (items) => {
    const route = ROUTES.EDIT_MOVIE.split("/")[0];
    return navigate(`${ROUTES.MOVIES}/${route}/${items?._id}`);
  };

  const deleteMovie = (items) => {
    setOnDelete(true);
    deleteMovieById(`${APIS.DELETE_MOVIE}/${items?._id}`).then((res) =>
      setOnDelete(false)
    );
  };
  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24">
        <div className="relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left">
          <h1 className="font-black text-3xl md:text-5xl leading-snug max-w-3xl">
            {"Lights. Camera. Your Movie Library!"}
          </h1>
          <div className="flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8">
            <Link
              title={!isLoggedIn && "Sign In for add Collection"}
              to={ROUTES.ADD_MOVIE}
              className="font-bold px-8 lg:px-10 py-3 rounded bg-orange-400 hover:bg-orange-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300"
            >
              {"Add Collection"}
            </Link>
          </div>
        </div>
        <div className="relative mt-12 lg:mt-0 flex flex-col justify-center">
          <div className="flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none">
            <img alt="Hero" src={DesignIllustration} />
            <SvgDecoratorBlob2 className="pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10" />
          </div>
        </div>
      </div>
      <div className="relative  ">
        <div className="flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto ">
          <h2 className="text-4xl sm:text-5xl font-black tracking-wide text-center w-full">
            <hr />
            {"Movies Collections"}
            <hr />
          </h2>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moviesList.map((items, key) => (
            <Card
              key={key}
              items={items}
              editMovie={() => editMovie(items)}
              deleteMovie={() => deleteMovie(items)}
            />
          ))}
        </div>
      </div>
      <SvgDecoratorBlob1 className="pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10" />
    </div>
  );
};
export default Movies;
