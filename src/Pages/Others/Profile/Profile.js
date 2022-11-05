import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-center py-20 bg-gray-100">
      <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
        <img
          src={user?.photoURL}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <h2 className="text-xl font-semibold tracking-wide">
            {user?.displayName}
          </h2>
        </div>
        <p className="dark:text-gray-100">Email : {user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
