import React from "react";

const ProfileInformation = () => {
  return (
    <div className="mt-14">
      {/* About */}
      <div>
        <div className="text-[25px] font-semibold border-b-2">About Me</div>
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
        <div className="text-[25px] font-semibold border-b-2">
          work experience
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
        <div className="text-[25px] font-semibold border-b-2">Education</div>
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
    </div>
  );
};

export default ProfileInformation;
