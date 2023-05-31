"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ProfileInformation from "@/components/profile/ProfileInformation";
import Application from "@/components/profile/Application";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/reducer";
import Admin from "@/components/profile/Admin.";
import toast, { Toaster } from "react-hot-toast";

const page = ({ params }: { params: { id: string } }) => {
  const user = useSelector((state: RootState) => state.User);
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const dataUser = user.dataDetail;
  const [tab, setTab] = useState<string>("Profile Inofmation");
  const tabs: string[] = [
    "Profile Inofmation",
    dataUser?.is_admin ? "Admin" : "Application",
  ];
  let tabComp: any;

  switch (tab) {
    case "Profile Inofmation":
      tabComp = <ProfileInformation />;
      break;
    case "Application":
      tabComp = <Application />;
      break;
    case "Admin":
      tabComp = <Admin />;
      break;
    default:
      break;
  }

  return (
    <div className="">
      <Navbar />
      <div className=" px-5 md:px-10 py-10 xl:w-10/12">
        <h1 className="text-3xl font-bold">{dataUser?.username}</h1>

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
          {tabComp}
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default page;
