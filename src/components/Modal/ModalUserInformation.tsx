"use client";
import React, { useEffect } from "react";
import BaseButton from "../BaseButton";
import TextArea from "../TextArea";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/reducer";
import { getDataApplication, updateDataApplication } from "@/redux/Application";
import toast from "react-hot-toast";
import { convertDate } from "@/utils";
interface Props {
  show: boolean;
  onHide: any;
  data: any;
}

interface InitialValues {
  status: string;
  notes: string;
}
const ModalUserInformation = ({ show, onHide, data }: Props) => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();

  const initialValues: InitialValues = {
    status: data.status,
    notes: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: async (val) => {
      await dispatch(updateDataApplication({ ...val, id: data._id }));
      await dispatch(getDataApplication({ user: "" }));
      formik.resetForm();
      toast.success("updated success");
      onHide();
    },
  });

  return show ? (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed  inset-0 z-50 bg-black bg-opacity-40 outline-none focus:outline-none">
      <div className="relative w-[900px] my-6 mx-auto ">
        {/*content*/}
        <div className="border-0  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h1 className="text-2xl font-semibold">Muhammad Fadhil Rahman</h1>

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
          <form className="" onSubmit={formik.handleSubmit}>
            <div className="p-5 overflow-y-auto max-h-[400px]">
              <div className="mb-5 flex justify-between">
                <h1 className="text-2xl font-semibold">Status application</h1>
                <h3>{data.status}</h3>
              </div>
              <h1 className="text-1xl ">{data.user.email}</h1>
              <div>
                <h3 className="mt-2 font-semibold">Cover Latter</h3>
                <p className="text-sm text-neutral-500">{data.cover_latter}</p>
              </div>
              <div className="mt-2">
                <h3 className="mt-2 font-semibold">About</h3>
                <p className="text-sm text-neutral-500">
                  {data.user.about || "-"}
                </p>
              </div>
              <div className="mt-2">
                <h3 className="mt-2 font-semibold">Work Experience</h3>
                <div className="mt-2">
                  {data.user.work_experience.length === 0
                    ? "-"
                    : data.user.work_experience.map((val: any, key: number) => {
                        return (
                          <div className="text-neutral-500 text-sm " key={key}>
                            <span>
                              - {val.position} at {val.company_name}
                            </span>
                            <p>
                              {convertDate(val.start_date)} -{" "}
                              {convertDate(val.end_date)}
                            </p>
                            <small>{val.additional_information}</small>
                          </div>
                        );
                      })}
                </div>
              </div>
              <div className="mt-2">
                <h3 className="mt-2 font-semibold">Education</h3>
                <div className="mt-2">
                  {data.user.education.length === 0
                    ? "-"
                    : data.user.education.map((val: any, key: number) => {
                        return (
                          <div className="text-neutral-500 text-sm " key={key}>
                            <span>
                              - {val.school_name} major {val.major}
                            </span>
                            <p>
                              {convertDate(val.start_date)} -{" "}
                              {convertDate(val.end_date)}
                            </p>
                            <small>{val?.additional_information}</small>
                          </div>
                        );
                      })}
                </div>
              </div>
              <div className="mt-2">
                <h3 className="mt-2 font-semibold">CV</h3>
                <span className="text-blue-500 underline">www.ahuy.com</span>
              </div>

              <div className="mt-5">
                <div className="mb-3">
                  <label htmlFor="" className="text-green-600">
                    *change application status
                  </label>

                  <select
                    name="status"
                    value={formik.values.status}
                    onChange={formik.handleChange}
                    id=""
                    className="border w-full focus:outline-none bg-white px-3 py-3"
                  >
                    <option value="in review">in review </option>
                    <option value="enter the shortlist">
                      enter the shortlist{" "}
                    </option>
                    <option value="interview">interview </option>
                    <option value="test">test </option>
                    <option value="unsuccessful">unsuccessful </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="" className="text-green-600">
                    *Since notes
                  </label>
                  <TextArea
                    name="notes"
                    value={formik.values.notes}
                    onChange={formik.handleChange}
                  ></TextArea>
                </div>
              </div>
            </div>
            <div className="border-t p-5">
              <BaseButton onClick={onHide} className="mr-2">
                Back
              </BaseButton>
              <BaseButton type="submit">Submit</BaseButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalUserInformation;
