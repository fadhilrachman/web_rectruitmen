"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/reducer";
import { getDataProfile } from "@/redux/UserSlice";
import { getToken } from "@/utils";
const index = () => {
  const token = getToken();
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const user = useSelector((state: RootState) => state.User);
  const dataUser = user.dataDetail;
  useEffect(() => {
    dispatch(getDataProfile());
  }, []);

  return (
    <div className="px-10">
      <div className="flex justify-between  py-5 font-semibold underline">
        <h1>Careers</h1>

        {token && dataUser && dataUser._id ? (
          <Link href={`/profile/${dataUser._id}`}>Profile</Link>
        ) : (
          <div>
            <Link href="/login" className="mr-2">
              Login
            </Link>
            |
            <Link href="/register" className="ml-2">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
