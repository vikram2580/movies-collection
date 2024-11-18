import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import {
  addEditMovieApi,
  findMovieById,
  updateMovieById,
} from "../../apis/moviesApi";
import { APIS } from "../../apis/endpoints";

const AddEditMovies = () => {
  let defaultValues = {
    title: "",
    studio: "",
    genres: "",
    directors: "",
    writers: "",
    actors: "",
    year: 0,
    length: 0,
    shortDescription: "",
    mpaRating: "",
    criticsRating: 0,
    image: "",
  };
  const onSubmit = (payload) => {
    if (id) {
      updateMovieById(`${APIS.EDIT_MOVIE}/${id}`, payload).then((res) =>
        console.log(res)
      );
    } else {
      addEditMovieApi(APIS.ADD_MOVIE, payload).then((res) => console.log(res));
    }
  };
  const [movieData, setMovieData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      findMovieById(`${APIS.FIND_MOVIE}/${id}`).then((res) => {
        let tempdata = { ...res?.data };
        setMovieData(tempdata);
      });
    }
    console.log(movieData);
  }, [id]);
  return (
    <div>
      {" "}
      <div className="`min-h-screen bg-gray-100 text-white font-medium flex justify-center relative">
        <div className="max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-full xl:w-full p-6 sm:p-12">
            <div className="mt-12">
              <div className="w-full flex-1 mt-8">
                <Formik
                  onSubmit={onSubmit}
                  initialValues={id ? movieData : defaultValues}
                  // validationSchema={loginSchema}
                  enableReinitialize
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  }) => (
                    <form
                      className=" lg:w-full xl:w-full mx-auto  lg:grid lg:grid-cols-3  lg:gap-2"
                      onSubmit={handleSubmit}
                    >
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0"
                        type="text"
                        placeholder="Title"
                        id="title"
                        name="title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                      />
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0"
                        type="text"
                        placeholder="Image Link"
                        id="image"
                        name="image"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.image}
                      />
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0"
                        type="text"
                        placeholder="Studio"
                        id="studio"
                        name="studio"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.studio}
                      />
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0"
                        type="text"
                        placeholder="Genres"
                        id="genres"
                        name="genres"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.genres}
                      />
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0"
                        type="text"
                        placeholder="Directors"
                        id="directors"
                        name="directors"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.directors}
                      />
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0"
                        type="text"
                        placeholder="Writers"
                        id="writers"
                        name="writers"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.writers}
                      />
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0"
                        type="text"
                        placeholder="Actors"
                        id="actors"
                        name="actors"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.actors}
                      />
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0"
                        type="number"
                        placeholder="year"
                        id="year"
                        name="year"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.year}
                      />
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0"
                        type="number"
                        placeholder="length"
                        id="length"
                        name="length"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.length}
                      />
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0"
                        type="text"
                        placeholder="Description"
                        id="shortDescription"
                        name="shortDescription"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.shortDescription}
                      />
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0"
                        type="text"
                        placeholder="mpaRating"
                        id="mpaRating"
                        name="mpaRating"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.mpaRating}
                      />
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0"
                        type="text"
                        placeholder="criticsRating"
                        id="criticsRating"
                        name="criticsRating"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.criticsRating}
                      />
                      <button className="mt-5 tracking-wide font-semibold bg-orange-400 text-gray-100 w-full py-4 rounded-lg hover:bg-orange-500 transition-all duration-300 ease-in-out flex items-center justify-center ">
                        <span className="ml-3">{"Add"}</span>
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditMovies;
