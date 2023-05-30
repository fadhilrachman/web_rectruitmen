"use client";
import React, { useState } from "react";
import ModalUserInformation from "../Modal/ModalUserInformation";

const Admin = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="mt-14 grid grid-cols-3 ">
      <div
        className="border p-4 hover:cursor-pointer hover:bg-neutral-100"
        onClick={() => setShow(true)}
      >
        <div></div>
        <h1 className="text-2xl font-semibold">Laravel Developer</h1>
        <span className="text-neutral-400">muhfadhilrachman@gmail.com</span>
      </div>
      <ModalUserInformation show={show} onHide={() => setShow(false)} />
    </div>
  );
};

export default Admin;
