import React from "react";
import { Link } from "react-router-dom";
import Image from "../Header/icon.png";
const Footer = () => {
  return (
    <div>
      <footer className="px-32 py-8 dark:bg-gray-900 dark:text-gray-400">
        <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full ">
              <img src={Image} alt="" />
            </div>
            <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
              <li>
                <Link className="font-medium text-white" to="/">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link className="font-medium text-white" to="/">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
            <li>
              <Link className="font-medium text-white" to="/courses">
                Courses
              </Link>
            </li>
            <li>
              <Link className="font-medium text-white" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="font-medium text-white" to="/faq">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
