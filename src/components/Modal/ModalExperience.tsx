"use client";
import React, { MouseEventHandler } from "react";
import BaseButton from "../BaseButton";
import TextArea from "../TextArea";
import { useFormik } from "formik";
import * as Yup from "yup";
import BaseInput from "../BaseInput";

interface Props {
  show: boolean;
  onHide: MouseEventHandler<HTMLButtonElement>;
  functDelete?: MouseEventHandler<HTMLButtonElement>;
}

interface InitialValues {
  company_name: string;
  position: string;
  start_date: string;
  end_date: string;
  additional_information: string;
}
const ModalExperience = ({ show, onHide, functDelete }: Props) => {
  const initialValues: InitialValues = {
    company_name: "",
    position: "",
    start_date: "",
    end_date: "",
    additional_information: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      company_name: Yup.string().required("cannot be empty"),
      position: Yup.string().required("cannot be empty"),
      start_date: Yup.string().required("cannot be empty"),
      end_date: Yup.string().required("cannot be empty"),
      additional_information: Yup.string().required("cannot be empty"),
    }),
    onSubmit: () => {},
    validateOnChange: false, // Tidak memicu validasi saat nilai input berubah
    validateOnBlur: false,
  });

  console.log(formik.errors);

  return show ? (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed  inset-0 z-50 bg-black bg-opacity-40 outline-none focus:outline-none">
      <div className="relative w-[500px] my-6 mx-auto ">
        {/*content*/}
        <div className="border-0  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-2xl font-semibold">Add Work Experience</h3>
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
                name="company_name"
                onChange={formik.handleChange}
                value={formik.values.company_name}
                errMessage={formik.errors?.company_name}
                isInvalid={!!formik.errors?.company_name}
              />
              <BaseInput
                placeholder="position"
                className="mt-5"
                name="position"
                onChange={formik.handleChange}
                value={formik.values.position}
                errMessage={formik.errors?.position}
                isInvalid={!!formik.errors?.position}
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
                    value={formik.values.start_date}
                    errMessage={formik.errors?.start_date}
                    isInvalid={!!formik.errors?.start_date}
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
                    value={formik.values.end_date}
                    errMessage={formik.errors?.end_date}
                    isInvalid={!!formik.errors?.end_date}
                  />
                </div>
              </div>
              <TextArea
                placeholder="what did you do while at the company?"
                className="mt-3"
                name="additional_information"
                onChange={formik.handleChange}
                value={formik.values.additional_information}
                errMessage={formik.errors?.additional_information}
                isInvalid={!!formik.errors?.additional_information}
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

export default ModalExperience;
