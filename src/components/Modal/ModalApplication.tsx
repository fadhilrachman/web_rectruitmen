"use client";
import React, { MouseEventHandler } from "react";
import BaseButton from "../BaseButton";
import TextArea from "../TextArea";
import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {
  show: boolean;
  onHide: MouseEventHandler<HTMLButtonElement>;
  functDelete?: MouseEventHandler<HTMLButtonElement>;
}

interface InitialValues {
  about: string;
}
const ModalApplication = ({ show, onHide, functDelete }: Props) => {
  const initialValues: InitialValues = {
    about: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      about: Yup.string().required("cannot be empty"),
    }),
    onSubmit: () => {},
  });

  console.log(formik.values);

  return show ? (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed  inset-0 z-50 bg-black bg-opacity-40 outline-none focus:outline-none">
      <div className="relative w-[500px] my-6 mx-auto ">
        {/*content*/}
        <div className="border-0  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
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
                placeholder=" about yourself......"
                className="mt-3"
                name="about"
                value={formik.values.about}
                onChange={formik.handleChange}
                isInvalid={!!formik.errors.about}
                errMessage={formik.errors.about}
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
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalApplication;
