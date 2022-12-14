import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./hero-img.json";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <section className="bg-gray-100 text-gray-100">
        <div className="container flex flex-col justify-center lg:px-28 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="lg:text-5xl md:text-3xl sm:text-3xl text-teal-600 font-bold leading-none ">
              Develop Your Skill Now
            </h1>
            <p className="mt-6 mb-8 lg:text-lg text-black sm:mb-12 ">
              Skill development means a process which enables trainees and the
              working age people to gain access to dexterity, knowledge and
              ability, career ethics and good working attitude by skill
              training, establishing skill standards, and other relating
              activities.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                rel="noopener noreferrer"
                to="/courses"
                className="px-8 py-3 text-lg text-white font-semibold rounded bg-teal-600 "
              >
                Continue Courses
              </Link>
            </div>
          </div>
          <div>
            <Lottie animationData={groovyWalkAnimation} loop={true}></Lottie>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
