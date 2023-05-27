import BaseButton from "@/components/BaseButton";
import BaseInput from "@/components/BaseInput";
import React from "react";

const pages = () => {
  return (
    <div className="h-screen flex justify-center items-center  ">
      <form action="" className="w-4/12 bg-white border rounded px-7 py-5 mb-7">
        <h1 className="text-3xl text-green-600 font-bold">Login</h1>
        <div className="mb-4 mt-5">
          <label htmlFor="">Email</label>
          <br></br>
          <BaseInput placeholder="email" className="w-full" />
        </div>

        <div className="mb-4">
          <label htmlFor="">Password</label>
          <br></br>
          <BaseInput placeholder="email" className="w-full" />
        </div>

        <BaseButton className="w-full">Submit</BaseButton>
      </form>
    </div>
  );
};

export default pages;
