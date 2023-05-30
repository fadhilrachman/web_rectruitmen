"use client";
import React, { MouseEventHandler } from "react";
import BaseButton from "../BaseButton";
import TextArea from "../TextArea";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getToken } from "@/utils";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/reducer";
import { createApplication } from "@/redux/Application";
import toast, { Toaster } from "react-hot-toast";
interface Props {
  show: boolean;
  onHide: any;
  functDelete?: MouseEventHandler<HTMLButtonElement>;
  id?: string;
}

interface InitialValues {
  cover_latter: string;
}
const ModalApplication = ({ show, onHide, functDelete, id }: Props) => {
  const token = getToken();
  const user = useSelector((state: RootState) => state.User);
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();

  const dataUser = user.dataDetail;
  const initialValues: InitialValues = {
    cover_latter: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      cover_latter: Yup.string().required("cannot be empty"),
    }),
    onSubmit: async (val) => {
      const obj = {
        user: dataUser._id,
        status: "in review",
        cover_latter: val.cover_latter,
        job: id,
      };
      await dispatch(createApplication(obj));
      await toast.success("successfully submitted application");
      onHide();
    },
    validateOnChange: false, // Tidak memicu validasi saat nilai input berubah
    validateOnBlur: false,
  });

  console.log({ id });

  return show ? (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed  inset-0 z-50 bg-black bg-opacity-40 outline-none focus:outline-none">
      {}
      <div className="relative w-[500px] my-6 mx-auto ">
        {/*content*/}
        <div className="border-0  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {token ? (
            <>
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-2xl font-semibold">Apply Job</h3>
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
                    Cover Latter{" "}
                    <span className="font-bold">
                      (!!make sure you have completed the profile, because the
                      application will be seen from the files in the profile )
                    </span>
                  </label>
                  <TextArea
                    placeholder=" cover latter......"
                    className="mt-3"
                    name="cover_latter"
                    value={formik.values.cover_latter}
                    onChange={formik.handleChange}
                    isInvalid={!!formik.errors.cover_latter}
                    errMessage={formik.errors.cover_latter}
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <BaseButton variant="white" className="mr-4" onClick={onHide}>
                    Cancel
                  </BaseButton>
                  <BaseButton onClick={functDelete}>Submit</BaseButton>
                </div>
              </form>
            </>
          ) : (
            <div className="p-5  flex justify-between">
              <div>
                Login terlebih dahulu
                <Link href="/profile" className="mx-2 text-green-600 underline">
                  Register
                </Link>
                <Link href="/profile" className="mx-2 text-green-600 underline">
                  Login
                </Link>
              </div>
              <span
                onClick={onHide}
                className="cursor-pointer underline text-red-500"
              >
                Back
              </span>
            </div>
          )}
          {/*header*/}
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalApplication;
