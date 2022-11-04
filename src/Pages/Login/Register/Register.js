import { updateProfile } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const Register = () => {
  const { registerUserWithEmailPassword } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    registerUserWithEmailPassword(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            console.log(user);
          })

          .catch((error) => {
            console.error(error.message);
          });
        form.reset();
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="flex justify-center bg-gray-100 py-20">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white text-gray-900 stroke-gray-300">
        <h1 className="text-2xl font-bold text-center text-black">
          Registration
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label
              htmlFor="name"
              className="block text-black font-semibold text-left pb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="username"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-700 stroke-cyan-500 text-gray-900 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label
              htmlFor="photoURL"
              className="block text-black font-semibold text-left pb-2"
            >
              Photo URL
            </label>
            <input
              type="url"
              name="photoURL"
              id="PhotoURL"
              placeholder="Enter your photoURL"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-700 stroke-cyan-500 text-gray-900 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label
              htmlFor="email"
              className="block text-black font-semibold text-left pb-2"
            >
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your mail"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-700 stroke-cyan-500 text-gray-900 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label
              htmlFor="password"
              className="block text-black font-semibold text-left pb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-700 stroke-cyan-500 text-gray-900 focus:border-violet-400"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">
            Registration
          </button>
        </form>
        <p className="text-xs text-center sm:px-6 text-gray-400">
          Do you have an account?
          <Link
            rel="noopener noreferrer"
            to="/login"
            className="hover:underline text-violet-400 font-medium ml-2"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
