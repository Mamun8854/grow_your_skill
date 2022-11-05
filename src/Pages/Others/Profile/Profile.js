import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-center py-20 bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white text-gray-900">
        <h1 className="text-2xl font-bold text-center">User Information</h1>
        <form className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div className="space-y-1 text-sm">
            <label
              htmlFor="email"
              className="block text-black font-semibold text-left pb-2"
            >
              E-mail
            </label>
            <input
              readOnly
              defaultValue={user.email}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your mail"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-700 stroke-cyan-500 text-gray-900 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block text-black font-semibold text-left pb-2">
              Photo URL
            </label>
            <input
              defaultValue={user.photoURL}
              type="url"
              name="photoURL"
              id="photoURL"
              placeholder="Enter your photoURL"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-700 stroke-cyan-500 text-gray-900 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block text-black font-semibold text-left pb-2">
              Name
            </label>
            <input
              defaultValue={user.displayName}
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-700 stroke-cyan-500 text-gray-900 focus:border-violet-400"
            />
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center font-semibold rounded-sm text-gray-900 bg-violet-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
