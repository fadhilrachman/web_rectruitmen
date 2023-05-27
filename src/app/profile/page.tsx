"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ProfileInformation from "@/components/ProfileInformation";
import Application from "@/components/Application";

const page = () => {
  const [tab, setTab] = useState<string>("Profile Inofmation");
  const tabs: string[] = ["Profile Inofmation", "Application"];
  return (
    <div className="">
      <Navbar />
      <div className="px-20 py-10 w-8/12">
        <h1 className="text-3xl font-bold">Fadhil Rahman</h1>

        <div className="mt-5">
          <div className="text-[19px] text-neutral-500 flex">
            {tabs.map((val, key) => {
              return (
                <h1
                  className={`mr-5 font-semibold ${
                    val === tab && "text-green-600 border-b-2 border-green-600"
                  } hover:border-green-600 hover:border-b-2 hover:cursor-pointer`}
                  onClick={() => setTab(val)}
                  key={key}
                >
                  {val}
                </h1>
              );
            })}
          </div>
          {tab === "Profile Inofmation" ? (
            <ProfileInformation />
          ) : (
            <Application />
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
