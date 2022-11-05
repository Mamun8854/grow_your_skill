import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Premium = () => {
  const data = useLoaderData();
  const { name, picture, price, details, id } = data;
  return (
    <div className="flex justify-center py-16">
      <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
        <img
          src={picture}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
            <p className="text-gray-100">{details}</p>
            <p className="text-xl text-gray-400 font-bold pb-4">
              Price : $ <span className="text-teal-300">{price}</span>
            </p>
          </div>
          <Link to={`/courses/${id}`}>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900"
            >
              Go To Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Premium;
