"use client";
import React, { useState } from "react";
import ModalAbout from "./Modal/ModalAbout";
import ModalEducation from "./Modal/ModalEducation";
import ModalExperience from "./Modal/ModalExperience";

interface Modal {
  modalAbout: boolean;
  modalExperience: boolean;
  modalEducation: boolean;
}
const ProfileInformation = () => {
  const [modal, setModal] = useState<Modal>({
    modalAbout: false,
    modalEducation: false,
    modalExperience: false,
  });
  return (
    <div className="mt-14">
      {/* About */}
      <div>
        <div className="border-b-2 flex justify-between items-center">
          <h1 className="text-[25px] font-semibold ">About Me</h1>
          <span
            className="text-green-600 underline hover:cursor-pointer"
            onClick={() => setModal({ ...modal, modalAbout: true })}
          >
            Edit
          </span>
        </div>
        <p className="mt-5 font-light text-gray-700">
          As a Front-end developer, I have the ability to design and implement
          the visual appearance of applications or websites. I use programming
          languages ​​such as HTML, CSS, and JavaScript to create web pages that
          are intuitive and easy to use for users. I also have experience
          working with back-end development teams to ensure that applications or
          websites work properly and meet user needs. I also constantly strive
          to improve my skills and learn the latest technology to provide the
          best results for clients.
        </p>
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
        <div className="mt-5">
          <h3 className="font-semibold text-[19px]">- Frontend Developer</h3>
          <h4 className="font-light">Sagara</h4>
          <div className="font-light text-gray-700 mt-3">
            <p>Juni 2022 - mei 2022</p>
            <p>
              Membuat Dashboard untuk perusahaan ikan menggunakan react js
              dengan state management redux-sage dan css framework bootstrap
            </p>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="font-semibold text-[19px]">- Backend Developer</h3>
          <h4 className="font-light">DOT Indonesia</h4>
          <div className="font-light text-gray-700 mt-3">
            <p>Juni 2022 - mei 2022</p>
            <p>
              Membuat Dashboard untuk perusahaan ikan menggunakan react js
              dengan state management redux-sage dan css framework bootstrap
            </p>
          </div>
        </div>
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
        <div className="mt-5">
          <h3 className="font-semibold text-[19px]">- SMK 2 Garut</h3>
          <h4 className="font-light">Jurusan IPA</h4>
          <p className="font-light text-gray-700 mt-3"> Juni 2022 - mei 2022</p>
        </div>
        <div className="mt-5">
          <h3 className="font-semibold text-[19px]">- SMK 2 Garut</h3>
          <h4 className="font-light">Jurusan IPA</h4>
          <p className="font-light text-gray-700 mt-3"> Juni 2022 - mei 2022</p>
        </div>
        <div className="mt-5">
          <h3 className="font-semibold text-[19px]">- SMK 2 Garut</h3>
          <h4 className="font-light">Jurusan IPA</h4>
          <p className="font-light text-gray-700 mt-3"> Juni 2022 - mei 2022</p>
        </div>
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
