"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/reducer";
import { getDataProfile } from "@/redux/UserSlice";
const index = () => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const user = useSelector((state: RootState) => state.User);
  const dataUser = user.dataDetail;
  useEffect(() => {
    dispatch(getDataProfile());
  }, []);

  return (
    <div className="px-10">
      <div className="flex justify-between  py-5">
        <h1>Careers</h1>
        <Link href={`/profile/${dataUser._id}`}>Profile</Link>
      </div>
    </div>
  );
};

export default index;
