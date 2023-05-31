"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import BaseButton from "../../../components/BaseButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/reducer";
import { getDataJob, getDetailJob } from "@/redux/jobSlice";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import ModalApplication from "@/components/Modal/ModalApplication";
import toast, { Toaster } from "react-hot-toast";

const index = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const job = useSelector((state: RootState) => state.Job);
  const dataJob = job.dataDetail.data;
  const [modal, setModal] = useState<boolean>(false);
  useEffect(() => {
    dispatch(getDetailJob({ id }));
  }, []);

  const descriptionArray: string[] =
    dataJob &&
    dataJob?.job_description
      ?.split("\n")
      ?.filter((item: string) => item.trim() !== "");

  return (
    <div className=" md:px-5 text-gray-700 pb-20">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 px-14 mt-16 gap-10">
        {job.status === "loading" || !dataJob ? (
          <div className="col-span-2  animate-pulse">
            <div className="h-5 w-full bg-gray-200 rounded-full  "></div>
            <div className="h-5 w-full bg-gray-200 rounded-full mt-10 "></div>
            <div className="h-5 w-full bg-gray-200 rounded-full mt-10 "></div>
            <div className="h-5 w-full bg-gray-200 rounded-full mt-10 "></div>
            <div className="h-5 w-full bg-gray-200 rounded-full mt-10 "></div>
          </div>
        ) : (
          <div className="col-span-2">
            <div className="border-b-2 border-green-600 pb-2 ">
              <h1 className="text-3xl text-green-600 ">
                {dataJob.job_name}{" "}
                <span className="text-neutral-300">- {dataJob?.category}</span>{" "}
              </h1>
            </div>
            <div className="flex justify-between">
              <h3 className="text-gray-400 text-[15px] mt-4">
                Salary Rp.{dataJob.salary}
              </h3>
              <h3 className="text-gray-400 text-[15px] mt-4">
                {dataJob.level} Level
              </h3>
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
        )}
        <div>
          <BaseButton className="w-full" onClick={() => setModal(true)}>
            Easy Apply
          </BaseButton>
        </div>
      </div>
      <ModalApplication
        id={dataJob?._id}
        show={modal}
        onHide={() => setModal(false)}
      />
      <Toaster position="top-right" />
    </div>
  );
};

export default index;
