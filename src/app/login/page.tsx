"use client";
import BaseButton from "@/components/BaseButton";
import BaseInput from "@/components/BaseInput";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Login } from "@/utils/interfaces/user";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/reducer";
import { login } from "@/redux/UserSlice";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
const pages = () => {
  const router = useRouter();

  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const user = useSelector((state: RootState) => state.User);
  console.log({ user });

  const initialValues: Login = {
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string().required("email tidak boleh kosong"),
      password: Yup.string()
        .required("cannot be empty")
        .min(6, "cannot be empty"),
    }),
    onSubmit: async (val: Login) => {
      await dispatch(login(val));
      
    },
    validateOnChange: false, // Tidak memicu validasi saat nilai input berubah
    validateOnBlur: false,
  });
  useEffect(() => {
    if (formik.isSubmitting) {
      if (user.statusLogin === "error") {
        toast.error(user.errMessage, {
          duration: 1000,
        });
      }
      if (user.statusLogin === "success") {
        toast.success("login success", {
          duration: 1000,
        });
        localStorage.setItem("token", user.data?.token);
        router.push("/");
        // window.location.reload();
      }
    }
  }, [user.statusLogin]);
  return (
    <div className="h-screen flex justify-center items-center  ">
      <form
        action=""
        className="w-11/12 sm:w-9/12 md:w-6/12 bg-white border rounded px-7 py-5 mb-7"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-3xl text-green-600 font-bold">Login</h1>
        <div className="mb-4 mt-5">
          <label htmlFor="">Email</label>
          <br></br>
          <BaseInput
            placeholder="email"
            className="w-full"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            errMessage={formik.errors.email}
            onBlur={formik.handleBlur}
            isInvalid={!!formik.errors?.email && !!formik.touched.email}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="">Password</label>
          <br></br>
          <BaseInput
            placeholder="password"
            className="w-full"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            errMessage={formik.errors.password}
            onBlur={formik.handleBlur}
            isInvalid={!!formik.errors?.password && !!formik.touched.password}
          />
        </div>

        <BaseButton className="w-full" type="submit">
          Submit
        </BaseButton>
        <small className="mt-2">
          don't have account yet
          <Link href="/register" className="text-green-600 underline">
            register
          </Link>
        </small>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default pages;
