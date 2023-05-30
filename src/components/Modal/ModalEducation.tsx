"use client";
import React, { MouseEventHandler } from "react";
import BaseButton from "../BaseButton";
import TextArea from "../TextArea";
import { useFormik } from "formik";
import * as Yup from "yup";
import BaseInput from "../BaseInput";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/reducer";
import { createEducation, getDataProfile } from "@/redux/UserSlice";

interface Props {
  show: boolean;
  onHide: any;
  functDelete?: MouseEventHandler<HTMLButtonElement>;
}

interface InitialValues {
  school_name: string;
  major: string;
  start_date: string;
  end_date: string;
  additional_information: string;
}
const ModalEducation = ({ show, onHide, functDelete }: Props) => {
  const user = useSelector((state: RootState) => state.User);
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const dataUser = user.dataDetail;
  const initialValues: InitialValues = {
    school_name: "",
    major: "",
    start_date: "",
    end_date: "",
    additional_information: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      school_name: Yup.string().required("cannot be empty"),
      major: Yup.string().required("cannot be empty"),
      start_date: Yup.string().required("cannot be empty"),
      end_date: Yup.string().required("cannot be empty"),
    }),
    onSubmit: async (val) => {
      await dispatch(createEducation({ ...val, id: dataUser._id }));
      await dispatch(getDataProfile());
      formik.resetForm();
      onHide();
    },
  });

  console.log(formik.errors);

  return show ? (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed  inset-0 z-50 bg-black bg-opacity-40 outline-none focus:outline-none">
      <div className="relative w-[500px] my-6 mx-auto ">
        {/*content*/}
        <div className="border-0  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-2xl font-semibold">Add Education</h3>
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
              <BaseInput
                placeholder="company name"
                className=""
                name="school_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.school_name}
                errMessage={formik.errors?.school_name}
                isInvalid={
                  !!formik.errors?.school_name && !!formik.touched.school_name
                }
              />
              <BaseInput
                placeholder="major"
                className="mt-5"
                name="major"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.major}
                errMessage={formik.errors?.major}
                isInvalid={!!formik.errors?.major && !!formik.touched.major}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                <div>
                  <label className="text-sm" htmlFor="">
                    Start Date
                  </label>
                  <BaseInput
                    type="date"
                    name="start_date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.start_date}
                    errMessage={formik.errors?.start_date}
                    isInvalid={
                      !!formik.errors?.start_date && !!formik.touched.start_date
                    }
                  />
                </div>
                <div>
                  <label className="text-sm" htmlFor="">
                    End Date
                  </label>
                  <BaseInput
                    type="date"
                    name="end_date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.end_date}
                    errMessage={formik.errors?.end_date}
                    isInvalid={
                      !!formik.errors?.end_date && !!formik.touched.end_date
                    }
                  />
                </div>
              </div>
              <TextArea
                placeholder="Additional information(opsional)"
                className="mt-3"
                name="additional_information"
                onChange={formik.handleChange}
                value={formik.values.additional_information}
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

export default ModalEducation;
