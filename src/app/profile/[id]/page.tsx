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
  const dataUser = user.dataDetail;
  const [tab, setTab] = useState<
    "adminApplication" | "profileInformation" | "application"
  >(dataUser && dataUser?.is_admin ? "adminApplication" : "profileInformation");

  const tabComp = {
    profileInformation: <ProfileInformation />,
    adminApplication: <Admin />,
    application: <Application />,
  };
  return (
    <div className="">
      <Navbar />
      <div className=" px-5 md:px-10 py-10 xl:w-10/12">
        <h1 className="text-3xl font-bold">{dataUser?.username}</h1>

        <div className="mt-5">
          <div className="text-sm text-center font-semibold text-gray-500 border-b  ">
            <ul className="flex flex-wrap -mb-px">
              <li className="me-2 cursor-pointer">
                <p
                  className={`${
                    tab == "profileInformation"
                      ? "text-green-600 border-b-2 border-green-600"
                      : ""
                  } inline-block p-4  rounded-t-lg active`}
                  aria-current="page"
                  onClick={() => setTab("profileInformation")}
                >
                  Profile Information
                </p>
              </li>
              <li className="me-2 cursor-pointer">
                <p
                  onClick={() =>
                    setTab(
                      dataUser?.is_admin ? "adminApplication" : "application"
                    )
                  }
                  className={`${
                    tab == "application" || tab == "adminApplication"
                      ? "text-green-600 border-b-2 border-green-600"
                      : ""
                  } inline-block p-4  rounded-t-lg active`}
                >
                  Application
                </p>
              </li>
            </ul>
          </div>

          {tabComp[tab]}
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default page;
