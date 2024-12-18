"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/reducer";
import { getDataProfile } from "@/redux/UserSlice";
import { getToken } from "@/utils";
import { usePathname } from "next/navigation";
const index = () => {
  const token = getToken();
  const path = usePathname();
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const user = useSelector((state: RootState) => state.User);
  const dataUser = user.dataDetail;
  useEffect(() => {
    dispatch(getDataProfile());
  }, []);

  return (
    <div className="px-10">
      <div
        className={`flex ${
          path == "/" ? "text-white" : "text-black"
        } no-underline justify-between  py-5 font-semibold `}
      >
        <Link href="/" className="hover:text-green-200">
          Cuy Career
        </Link>
        {token && dataUser && dataUser._id ? (
          <Link href={`/profile/${dataUser._id}`}>Profile</Link>
        ) : (
          <div className="space-x-4">
            <Link href="/login" className="hover:text-green-200">
              Login
            </Link>
            <span>|</span>
            <Link
              href="/register"
              className="hover:text-green-200 font-semibold"
            >
              Registersss
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
