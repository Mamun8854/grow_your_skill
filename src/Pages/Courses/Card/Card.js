import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { picture, name, id } = data;
  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
        <img
          src={picture}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
          </div>
          <Link to={`/courses/${id}`}>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-teal-600 text-white"
            >
              See course details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
