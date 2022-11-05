import React from "react";

const Faq = () => {
  return (
    <div className="py-20 bg-gray-100">
      <section className=" text-gray-900  text-left">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
              <h3 className="font-semibold">Why people come in our site</h3>
              <p className="mt-1 dark:text-gray-400">
                We provide best student guidelines. We provide the facility of
                teaching by good teachers. We actually have a beautiful
                environment. 20 hours support and many more benefits
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Does the end of the course mean the end of our responsibility?
              </h3>
              <p className="mt-1 dark:text-gray-400">
                We actually work for you. We try to get the students to a good
                place and we provide internships to the students.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">How to reach us?</h3>
              <p className="mt-1 dark:text-gray-400">
                First of all Registration our site and check your favourite
                course . and pay your course fee we are start our course
                December
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Are there all kinds of classes?</h3>
              <p className="mt-1 dark:text-gray-400">
                We are provide programing language classes . We don't have any
                classes on other subjects
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
