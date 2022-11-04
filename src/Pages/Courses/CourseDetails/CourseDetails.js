import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import Pdf from "react-to-pdf";
const CourseDetails = () => {
  const data = useLoaderData();
  const { picture, name, details, price, id } = data;

  const ref = React.createRef();
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [4, 4],
  };

  return (
    <div ref={ref} options={options}>
      <div>
        <section className="bg-gray-100 text-gray-100">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:px-24 lg:flex-row lg:justify-between">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src={picture}
                alt=""
                className="object-contain h-72 rounded sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </div>
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-5xl text-black font-bold leading-none sm:text-6xl">
                {name}
              </h1>
              <p className="mt-6 mb-8 text-gray-700 text-lg sm:mb-12">
                {details}
              </p>
              <p className="text-xl text-black font-bold pb-4">
                Price : $ <span className="text-teal-400">{price}</span>
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <Pdf targetRef={ref} filename="download.pdf">
                  {({ toPdf }) => (
                    <button
                      className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900"
                      onClick={toPdf}
                    >
                      Download PDF
                    </button>
                  )}
                </Pdf>
                <Link
                  to={`/premium/${id}`}
                  className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900"
                >
                  Premium
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseDetails;
