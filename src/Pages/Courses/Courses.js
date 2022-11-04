import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import Card from "./Card/Card";

const Courses = () => {
  const datas = useLoaderData();

  return (
    <div className="flex bg-gray-100">
      <div className="flex-col gap-5 w-96 hidden md:flex items-center pt-20 ">
        {datas.map((data) => (
          <Link
            key={data.id}
            className="bg-slate-900 w-56 rounded font-medium  text-white px-4 py-2"
          >
            {data.name}
          </Link>
        ))}
      </div>
      <div className="grid lg:grid-cols-3  mx-auto gap-5 px-10 py-10 ">
        {datas.map((data) => (
          <Card key={data.id} data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;
