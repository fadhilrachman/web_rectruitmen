"use client";
import BaseButton from "@/components/BaseButton";
import BaseInput from "@/components/BaseInput";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Register } from "@/utils/interfaces/user";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/reducer";
import { register } from "@/redux/UserSlice";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const pages = () => {
  const router = useRouter();
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const user = useSelector((state: RootState) => state.User);

  const initialValues: Register = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      username: Yup.string().required("cannot be empty"),
      email: Yup.string().required("cannot be empty"),
      password: Yup.string()
        .required("cannot be empty")
        .min(6, "minimum 6 character password"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "password error")
        .required("cannot be empty"),
    }),
    onSubmit: async (val: Register) => {
      console.log(val);
      dispatch(register(val));
    },
  });
  useEffect(() => {
    if (formik.isSubmitting) {
      if (user.statusRegister === "error") {
        toast.error(user.errMessage, {
          duration: 1000,
        });
      }
      if (user.statusRegister === "succes") {
        toast.success("register success", {
          duration: 1000,
        });
        router.push("/login");
      }
    }
  }, [user.statusRegister]);
  console.log(user.statusRegister);

  return (
    <div className="h-screen flex justify-center items-center  ">
      <form
        action=""
        className="w-11/12 sm:w-9/12 md:w-6/12 bg-white border rounded px-7 py-5 mb-7"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-3xl text-green-600 font-bold">Register</h1>
        <div className="mb-4 mt-5">
          <label htmlFor="">Username</label>
          <br></br>
          <BaseInput
            placeholder="username"
            className="w-full"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            errMessage={formik.errors.username}
            onBlur={formik.handleBlur}
            isInvalid={!!formik.errors?.username && !!formik.touched.username}
          />
        </div>
        <div className="mb-4 mt-5">
          <label htmlFor="">Email</label>
          <br></br>
          <BaseInput
            placeholder="user@gmail.com"
            type="email"
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
            placeholder="user123"
            className="w-full"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            errMessage={formik.errors.password}
            onBlur={formik.handleBlur}
            isInvalid={!!formik.errors?.password && !!formik.touched.password}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="">Confirm password</label>
          <br></br>
          <BaseInput
            type="password"
            placeholder="user123"
            className="w-full"
            name="confirm_password"
            onChange={formik.handleChange}
            value={formik.values.confirm_password}
            errMessage={formik.errors.confirm_password}
            onBlur={formik.handleBlur}
            isInvalid={
              !!formik.errors?.confirm_password &&
              !!formik.touched.confirm_password
            }
          />
        </div>

        <BaseButton className="w-full" type="submit">
          Submit
        </BaseButton>
        <small className="mt-2">
          don't have account yet
          <Link href="/login" className="text-green-600 underline">
            login
          </Link>
        </small>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default pages;
