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

  console.log({ dataApplication });

  return (
    <div className="mt-14 grid grid-cols-3 gap-8">
      {dataApplication?.map((val: any, key: number) => {
        return (
          <div
            className="border p-4 hover:cursor-pointer hover:bg-neutral-100"
            onClick={() => setShow({ ...show, modal: true, data: val })}
          >
            <div></div>
            <h1 className="text-2xl font-semibold">{val?.job.job_name}</h1>
            <span className="text-neutral-400">{val?.user.email}</span>
          </div>
        );
      })}
      <ModalUserInformation
        show={show.modal}
        onHide={() => setShow({ ...show, modal: false })}
        data={show.data}
      />
    </div>
  );
};

export default Admin;
