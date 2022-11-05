import React from "react";

const Blog = () => {
  return (
    <div className="text-left py-44 bg-gray-800">
      <section className=" text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Here is some answer of your question?
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer ">
                what is cors?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                  mechanism that allows a server to indicate any origins
                  (domain, scheme, or port) other than its own from which a
                  browser should permit loading resources. CORS also relies on a
                  mechanism by which browsers make a "preflight" request to the
                  server hosting the cross-origin resource, in order to check
                  that the server will permit the actual request. In that
                  preflight, the browser sends headers that indicate the HTTP
                  method and headers that will be used in the actual request.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer ">
                Why are you using firebase? What other options do you have to
                implement authentication?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  * Firebase helps me develop high-quality apps, grow my user
                  base, and etc.
                  <br />* Auth0 is the go-to user authentication platform and a
                  Firebase alternative for good reasons. It features a universal
                  login for all your applications to add user convenience. This
                  is like having SSO between multiple apps
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer ">
                How does the private route work?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  The react private route component renders child components (
                  children ) if the user is logged in. If not logged in the user
                  is redirected to the /login page with the return url passed in
                  the location state property.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer ">
                What is NodeJs ? How does Node work?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  * NodeJs is JavaScript runtime for building server-side or
                  desktop applications.
                  <br />* It is a used as backend service where javascript works
                  on the server-side of the application. This way javascript is
                  used on both frontend and backend. Node. js runs on chrome v8
                  engine which converts javascript code into machine code, it is
                  highly scalable, lightweight, fast, and data-intensive.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
