"use client";
import React, { useState, useEffect } from "react";
import ModalUserInformation from "../Modal/ModalUserInformation";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/reducer";
import { getDataApplication } from "@/redux/Application";
interface Props {
  modal: boolean;
  data: any;
}
const Admin = () => {
  const user = useSelector((state: RootState) => state.User);
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const application = useSelector((state: RootState) => state.Application);
  const dataApplication = application.data?.data;
  const dataUser = user.dataDetail;
  const [show, setShow] = useState<Props>({ modal: false, data: "" });

  useEffect(() => {
    if (dataUser._id) {
      dispatch(getDataApplication({ user: "" }));
    }
  }, []);

  return (
    <div className="mt-8">
      <div className="mb-5 text-neutral-500">
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full mr-2 bg-red-300"></div>
          <small> unsuccessful</small>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full mr-2 bg-neutral-200"></div>
          <small>in review</small>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full mr-2 bg-green-600"></div>
          <small>other</small>
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {application.status === "loading" ? (
          <div className="col-span-3">
            <div className="bg-gray-300 animate-pulse h-28"></div>
            <div className="bg-gray-300 animate-pulse h-28 mt-5"></div>
          </div>
        ) : dataApplication?.length == 0 ? (
          <p className="text-center text-neutral-500 col-start-2">
            no application
          </p>
        ) : (
          dataApplication?.map((val: any, key: number) => {
            return (
              <div
                className={`border p-4 hover:cursor-pointer hover:bg-opacity-70
             ${
               val.status === "in review"
                 ? "bg-neutral-200"
                 : val.status === "unsuccessful"
                 ? "bg-red-200"
                 : "bg-green-300"
             }`}
                onClick={() => setShow({ ...show, modal: true, data: val })}
              >
                <div></div>
                <h1 className="text-2xl font-semibold">{val?.job.job_name}</h1>
                <span className="text-neutral-400">{val?.user.email}</span>
              </div>
            );
          })
        )}
        <ModalUserInformation
          show={show.modal}
          onHide={() => setShow({ ...show, modal: false })}
          data={show.data}
        />
      </div>
    </div>
  );
};

export default Admin;
