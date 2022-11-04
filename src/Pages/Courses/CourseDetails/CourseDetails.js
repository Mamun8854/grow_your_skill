import React from "react";
import { useLoaderData, Link } from "react-router-dom";
const CourseDetails = () => {
  const data = useLoaderData();
  const { picture, name, details, price } = data;
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:px-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={picture}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              {name}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">{details}</p>
            <p className="text-xl font-bold pb-4">
              Price : $ <span className="text-teal-400">{price}</span>
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                to="/"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
              >
                Download PDF
              </Link>
              <Link
                to="/"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
              >
                Premium
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;