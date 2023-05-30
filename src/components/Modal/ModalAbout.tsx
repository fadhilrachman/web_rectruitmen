"use client";
import React, { MouseEventHandler } from "react";
import BaseButton from "../BaseButton";
import TextArea from "../TextArea";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/reducer";
import { editDataProfile, getDataProfile } from "@/redux/UserSlice";
import toast from "react-hot-toast";
interface Props {
  show: boolean;
  onHide: any;
  functDelete?: MouseEventHandler<HTMLButtonElement>;
}

interface InitialValues {
  about: string;
}
const ModalAbout = ({ show, onHide }: Props) => {
  const user = useSelector((state: RootState) => state.User);
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const dataUser = user.dataDetail;
  const initialValues: InitialValues = {
    about: dataUser?.about,
  };
  const formik = useFormik({
    initialValues,
    onSubmit: async (val) => {
      const obj = { id: dataUser._id, ...val };
      await dispatch(editDataProfile(obj));
      await dispatch(getDataProfile());
      toast.success("updated success");

      onHide();
    },
  });
  console.log({ dataUser, status: user.status });

  return show ? (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed  inset-0 z-50 bg-black bg-opacity-40 outline-none focus:outline-none">
      <div className="relative w-[500px] my-6 mx-auto ">
        {/*content*/}
        <div className="border-0  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-2xl font-semibold">About Me</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              // onClick={() => setShowModal(false)}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <form action="" className="my-4" onSubmit={formik.handleSubmit}>
            <div className="relative p-6 flex-auto">
              <label htmlFor="" className="">
                Tell about yourself so employers understand you more easily
              </label>
              <TextArea
                placeholder=" about yourself......"
                className="mt-3"
                name="about"
                value={formik.values.about}
                onChange={formik.handleChange}
              />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <BaseButton variant="white" className="mr-4" onClick={onHide}>
                Cancel
              </BaseButton>
              <BaseButton type="submit">Submit</BaseButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalAbout;
