import React from "react";
import Navbar from "@/components/Navbar";
import BaseInput from "@/components/BaseInput";
import TextArea from "@/components/TextArea";
const page = () => {
  return (
    <div>
      <Navbar />
      <form action="" className="px-20 py-10 w-8/12">
        <h3 className="text-3xl font-bold mb-7">Edit Profile</h3>
        <BaseInput placeholder="username" className="mb-5" />
        <BaseInput value="user@gmail.com" disabled={true} className="mb-5" />

        {/* About */}
        <div className="mt-5">
          <h3 className="text-2xl font-bold mb-7">About</h3>
          <TextArea placeholder="Tell about yourself so employers understand you more easily." />
        </div>

        {/* Work experiences */}
        <div className="mt-5">
          <h3 className="text-2xl font-bold mb-7">Work Experience</h3>
          <BaseInput placeholder="company name" className="mb-5" />
          <BaseInput placeholder="position" className="mb-5" />
          <div className="grid grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="">Start Date</label>
              <BaseInput type="date" />
            </div>
            <div>
              <label htmlFor="">End Date</label>
              <BaseInput type="date" />
            </div>
          </div>
          <TextArea placeholder="what did you do while at the company?" />
        </div>

        {/* Work experiences */}
        <div className="mt-5">
          <h3 className="text-2xl font-bold mb-7">Education</h3>
          <BaseInput placeholder="school name" className="mb-5" />
          <BaseInput placeholder="major" className="mb-5" />
          <div className="grid grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="">Start Date</label>
              <BaseInput type="date" />
            </div>
            <div>
              <label htmlFor="">End Date</label>
              <BaseInput type="date" />
            </div>
          </div>
          <TextArea placeholder="additional information(opsional)" />
        </div>
      </form>
    </div>
  );
};

export default page;
