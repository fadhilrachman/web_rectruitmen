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
import StatusApp from "../StatusApp";
interface Props {
  show: boolean;
  onHide: any;
  functDelete?: MouseEventHandler<HTMLButtonElement>;
}

interface InitialValues {
  about: string;
}
const ModalUserInformation = ({ show, onHide }: Props) => {
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
      onHide();
    },
  });
  console.log({ dataUser, status: user.status });

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
          <div className="p-5 overflow-y-auto max-h-[400px]">
            <div className="mb-5 flex justify-between">
              <h1 className="text-2xl font-semibold">Status application</h1>
              <h3>In review</h3>
            </div>
            <h1 className="text-1xl ">muhfadhilrachman@gmail.com</h1>
            <div>
              <h3 className="mt-2 font-semibold">Cover Latter</h3>
              <p className="text-sm text-neutral-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ex aspernatur ducimus recusandae asperiores! Sint
                molestias nulla at cupiditate nostrum. Explicabo repellat
                officia tempora culpa mollitia temporibus vitae iste iusto?
              </p>
            </div>
            <div className="mt-2">
              <h3 className="mt-2 font-semibold">About</h3>
              <p className="text-sm text-neutral-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ex aspernatur ducimus recusandae asperiores! Sint
                molestias nulla at cupiditate nostrum. Explicabo repellat
                officia tempora culpa mollitia temporibus vitae iste iusto?
              </p>
            </div>
            <div className="mt-2">
              <h3 className="mt-2 font-semibold">Work Experience</h3>
              <div className="mt-2">
                <div className="text-neutral-500 text-sm ">
                  <span>- Fronte Developer at Sagara</span>
                  <p>juni 2022 - juli 2022</p>
                  <small>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Cum impedit modi quasi eum nobis quis dolorem explicabo
                    debitis in delectus.
                  </small>
                </div>
                <div className="text-neutral-500 text-sm ">
                  <span>- Fronte Developer at Sagara</span>
                  <p>juni 2022 - juli 2022</p>
                  <small>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Cum impedit modi quasi eum nobis quis dolorem explicabo
                    debitis in delectus.
                  </small>
                </div>
                <div className="text-neutral-500 text-sm ">
                  <span>- Fronte Developer at Sagara</span>
                  <p>juni 2022 - juli 2022</p>
                  <small>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Cum impedit modi quasi eum nobis quis dolorem explicabo
                    debitis in delectus.
                  </small>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h3 className="mt-2 font-semibold">Education</h3>
              <div className="mt-2">
                <div className="text-neutral-500 text-sm ">
                  <span>- Fronte Developer at Sagara</span>
                  <p>juni 2022 - juli 2022</p>
                  <small>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Cum impedit modi quasi eum nobis quis dolorem explicabo
                    debitis in delectus.
                  </small>
                </div>
                <div className="text-neutral-500 text-sm ">
                  <span>- Fronte Developer at Sagara</span>
                  <p>juni 2022 - juli 2022</p>
                  <small>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Cum impedit modi quasi eum nobis quis dolorem explicabo
                    debitis in delectus.
                  </small>
                </div>
                <div className="text-neutral-500 text-sm ">
                  <span>- Fronte Developer at Sagara</span>
                  <p>juni 2022 - juli 2022</p>
                  <small>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Cum impedit modi quasi eum nobis quis dolorem explicabo
                    debitis in delectus.
                  </small>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h3 className="mt-2 font-semibold">CV</h3>
              <span className="text-blue-500 underline">www.ahuy.com</span>
            </div>
          </div>
          <div className="border-t p-5">
            <BaseButton onClick={onHide}>Back</BaseButton>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalUserInformation;
