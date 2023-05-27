import React from "react";
import Navbar from "../../components/Navbar";
import BaseButton from "../../components/BaseButton";
const index = () => {
  const description: string =
    "Supervising projects to run smoothly according to plan (time, budget, and scope)\n Engaging in Requirement Gathering\n Developing and monitoring Project Plan\n Preparing reports for Stakeholders (clients & project directors)\n Providing direction and support to Developer Team\n Conducting project evaluations for employees, vendors, or freelancers\n Coordinating with Finance, Legal, Human Capital, and Engineering Team\n";
  const descriptionArray: string[] = description
    .split("\n")
    .filter((item) => item.trim() !== "");
  console.log(descriptionArray);

  return (
    <div className="px-10 text-gray-700 pb-20">
      <Navbar />
      <div className="grid grid-cols-3 px-14 mt-16 gap-10">
        <div className="col-span-2">
          <div className="border-b-2 border-green-600 pb-2 ">
            <h1 className="text-3xl text-green-600 ">
              Golang Developer (Freelance)
            </h1>
          </div>
          <div className="mt-10">
            <h2 className="font-bold"> Job Description</h2>
            <ul className="pl-10 mt-4">
              {descriptionArray.map((val, key) => {
                return (
                  <li key={key} className="mt-4 font-light text-[15px]">
                    - {val}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mt-10">
            <h2 className="font-bold"> Recruitment</h2>
            <ul className="pl-10 mt-4">
              {descriptionArray.map((val, key) => {
                return (
                  <li key={key} className="mt-4 font-light text-[15px]">
                    - {val}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div>
          <BaseButton className="w-full">Easy Apply</BaseButton>
        </div>
      </div>
    </div>
  );
};

export default index;
