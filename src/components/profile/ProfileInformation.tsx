"use client";
import React, { useEffect, useState } from "react";
import ModalAbout from "../Modal/ModalAbout";
import ModalEducation from "../Modal/ModalEducation";
import ModalExperience from "../Modal/ModalExperience";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/reducer";
import {
  deleteEducation,
  deleteWorkExperience,
  getDataProfile,
} from "@/redux/UserSlice";
import { convertDate } from "@/utils";
interface Modal {
  modalAbout: boolean;
  modalExperience: boolean;
  modalEducation: boolean;
}
const ProfileInformation = () => {
  const user = useSelector((state: RootState) => state.User);
  const dataUser = user.dataDetail;
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const [modal, setModal] = useState<Modal>({
    modalAbout: false,
    modalEducation: false,
    modalExperience: false,
  });

  const handleDeleteWorkExp = async (idWork: string) => {
    await dispatch(deleteWorkExperience({ id: dataUser._id, idWork }));
    dispatch(getDataProfile());
  };
  const handleDeleteEducation = async (idEducation: string) => {
    await dispatch(deleteEducation({ id: dataUser._id, idEducation }));
    dispatch(getDataProfile());
  };
  return (
    <div className="mt-14">
      {/* About */}
      <div>
        <div className="border-b-2 flex justify-between items-center">
          <h1 className="text-[25px] font-semibold ">About Me</h1>
          <span
            className={`text-green-600 underline hover:cursor-pointer ${
              !dataUser?.about && "hidden"
            }`}
            onClick={() => setModal({ ...modal, modalAbout: true })}
          >
            Edit
          </span>
        </div>
        <div className="mt-5 font-light text-gray-700">
          {user.status === "loading" ? (
            <div className="bg-gray-300 animate-pulse h-20 rounded"></div>
          ) : dataUser.about ? (
            <p>{dataUser.about}</p>
          ) : (
            <div className="text-center">
              <p className="text-neutral-400">
                Tell the company what makes you excel to be hired
              </p>
              <p
                className="text-green-600 underline hover:cursor-pointer"
                onClick={() => setModal({ ...modal, modalAbout: true })}
              >
                add a description about you{" "}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* work experience */}
      <div className="mt-10">
        <div className="border-b-2 flex flex-col items-start  justify-between md:flex-row md:items-center">
          <h1 className="text-[25px] font-semibold ">Work Experience</h1>
          <span
            className="text-green-600 underline hover:cursor-pointer"
            onClick={() => setModal({ ...modal, modalExperience: true })}
          >
            Add Work Experience
          </span>
        </div>

        {user.status === "loading" ? (
          <>
            <div className="bg-gray-300 animate-pulse h-20 rounded mt-5"></div>
            <div className="bg-gray-300 animate-pulse h-20 rounded mt-5"></div>
          </>
        ) : dataUser?.work_experience?.length === 0 ? (
          <div className="text-center mt-5">
            <p className="text-neutral-400">
              77.9% of companies consider work experience to be important in
              applications. So make sure this section is filled in to increase
              your chances of getting an interview!
            </p>
            <p
              className="text-green-600 underline hover:cursor-pointer"
              onClick={() => setModal({ ...modal, modalAbout: true })}
            >
              Add Work Experience{" "}
            </p>
          </div>
        ) : (
          dataUser?.work_experience?.map((val: any, key: number) => {
            const description: string[] =
              dataUser &&
              val?.additional_information
                ?.split("\n")
                ?.filter((item: string) => item.trim() !== "");
            console.log({ description });

            return (
              <div
                className="mt-5 flex flex-col md:flex-row justify-between group"
                key={key}
              >
                <div className="">
                  <h3 className="font-semibold text-[19px]">
                    - {val?.position}
                  </h3>
                  <h4 className="font-light">{val?.company_name}</h4>
                  <div className="font-light text-gray-700 mt-3">
                    <p>
                      {convertDate(val?.end_date)} -{" "}
                      {convertDate(val?.end_date)}
                    </p>
                    {description.map((item: string) => (
                      <p>{item}</p>
                    ))}
                  </div>
                </div>
                <div className="  mt-4 hidden group-hover:block">
                  <span
                    className="text-red-500 underline hover:cursor-pointer "
                    onClick={() => handleDeleteWorkExp(val._id)}
                  >
                    Delete
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* EDUCATION */}
      <div className="mt-10">
        <div className="border-b-2 flex flex-col items-start  justify-between md:flex-row md:items-center">
          <h1 className="text-[25px] font-semibold ">Education</h1>
          <span
            className="text-green-600 underline hover:cursor-pointer"
            onClick={() => setModal({ ...modal, modalEducation: true })}
          >
            Add Education
          </span>
        </div>
        {user.status === "loading" ? (
          <>
            <div className="bg-gray-300 animate-pulse h-20 rounded mt-5"></div>
            <div className="bg-gray-300 animate-pulse h-20 rounded mt-5"></div>
          </>
        ) : dataUser?.education?.length === 0 ? (
          <div className="text-center mt-5">
            <p className="text-neutral-400">
              Your background is seen by the company. Tell us about your
              educational background to get 23% more interviews.
            </p>
            <p
              className="text-green-600 underline hover:cursor-pointer"
              onClick={() => setModal({ ...modal, modalEducation: true })}
            >
              Add Eduction{" "}
            </p>
          </div>
        ) : (
          dataUser?.education?.map((val: any, key: number) => {
            const description: string[] =
              !!val?.additional_information === true &&
              val?.additional_information
                ?.split("\n")
                ?.filter((item: string) => item.trim() !== "");
            console.log({ description });

            return (
              <div
                className="mt-5 flex flex-col md:flex-row justify-between group"
                key={key}
              >
                <div className="">
                  <h3 className="font-semibold text-[19px]">
                    - {val?.school_name}
                  </h3>
                  <h4 className="font-light">{val?.major}</h4>
                  <div className="font-light text-gray-700 mt-3">
                    <p>
                      {convertDate(val?.end_date)} -{" "}
                      {convertDate(val?.end_date)}
                    </p>
                    {!!val?.additional_information === true
                      ? description.map((item: string) => <p>{item}</p>)
                      : ""}
                  </div>
                </div>
                <div className="  mt-4 hidden group-hover:block">
                  <span
                    className="text-red-500 underline hover:cursor-pointer "
                    onClick={() => handleDeleteEducation(val._id)}
                  >
                    Delete
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
      <ModalAbout
        show={modal.modalAbout}
        onHide={() => setModal({ ...modal, modalAbout: false })}
      />
      <ModalExperience
        show={modal.modalExperience}
        onHide={() => setModal({ ...modal, modalExperience: false })}
      />
      <ModalEducation
        show={modal.modalEducation}
        onHide={() => setModal({ ...modal, modalEducation: false })}
      />
    </div>
  );
};

export default ProfileInformation;
