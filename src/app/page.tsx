"use client";
import { getToken } from "@/utils";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { RootState } from "@/redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { getDataJob } from "@/redux/jobSlice";
import { QueryParam } from "@/utils/interfaces/job";

interface WorkEnv {
  img: string;
  title: string;
  deskripsi: string;
}

interface Job {
  title: string;
  level: string;
}

export default function Home() {
  const token = getToken();
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const kerja = useSelector((state: RootState) => state.Job);
  const dataJob = kerja.data;
  const [param, setParam] = useState<QueryParam>({
    search: "",
  });
  useEffect(() => {
    dispatch(getDataJob(param));
  }, [dispatch, param]);

  const workEnv: WorkEnv[] = [
    {
      img: "https://career.dot.co.id/wp-content/uploads/2022/02/ICON_BENEFIT2_Flexy_time.png",
      title: "Flexible Working Time",
      deskripsi:
        "Supported with time tracking and task management tools to help our developers self manage their work efficiently",
    },
    {
      img: "https://career.dot.co.id/wp-content/uploads/2022/02/ICON_BENEFIT2_remote.png",
      title: "Work Anywhere",
      deskripsi:
        "We are ready for space-boundless collaboration before it hypes",
    },
    {
      img: "https://career.dot.co.id/wp-content/uploads/2022/02/ICON_BENEFIT2_Flexy_time.png",
      title: "Winner Maker      ",
      deskripsi:
        "Not just working, we ensure our working place keeping our employee learn and stacking experiences",
    },
    {
      img: "https://career.dot.co.id/wp-content/uploads/2022/02/ICON_BENEFIT2_BPJS.png",
      title: "BPJS      ",
      deskripsi:
        "We comply government rules by registering our employee in health and retirement security program     ",
    },
    {
      img: "https://career.dot.co.id/wp-content/uploads/2022/02/ICON_BENEFIT2_COMPETITIVE_SALARY.png",
      title: "Competitive Salary      ",
      deskripsi:
        "We eager to adjust our salary to give the best benefit for this industry, simply to make it fair for employee ",
    },
    {
      img: "https://career.dot.co.id/wp-content/uploads/2022/02/ICON_BENEFIT2_WELLNESS.png",
      title: "Health & Wellness Program      ",
      deskripsi:
        "We seriously put our concern in employee health and wellbeing even by pushing them with incentives",
    },
  ];
  const job: Job[] = [
    {
      title: "Frontend Developer",
      level: "JUNIOR",
    },
    {
      title: "Baceknd Developer",
      level: "JUNIOR - INTEMADIATE",
    },
    {
      title: "Golang Developer",
      level: "JUNIOR",
    },
    {
      title: "Wordpress Developer",
      level: "SENIOR",
    },
    {
      title: "Laravel Developer",
      level: "SENIOR",
    },
    {
      title: "Devops Engineer",
      level: "INTEMADIATE",
    },
  ];
  const pagination: number[] = [1, 2, 3, 4, 5, 6];
  return (
    <main className="">
      <div className="flex flex-col justify-between border min-h-screen pb-20 px-10 bg-green-600 text-white">
        <Navbar />
        <div>
          <h1 className="text-[45px] font-bold max-w-[900px] mb-4">
            Hone your skill in an agile, techy, and ever-growing environment
          </h1>
          <h3 className="font-bold text-[20px] mb-5">
            We invite the best talents to collaborate with us in challenging
            projects from all around the world
          </h3>
          <button className="border px-12 py-4">Find Job Position</button>
        </div>
      </div>
      <div className="text-center py-10 border px-10">
        <h1 className="font-bold text-4xl ">Working Environment</h1>
        <div className="mt-20 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10  ">
          {workEnv.map((val, key) => {
            return (
              <div className="flex flex-col items-center" key={key}>
                <img src={val.img} className="w-32" />
                <h3 className="font-bold text-[20px] mt-5 mb-5">{val.title}</h3>
                <p className="font-light text-neutral-400">{val.deskripsi}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center py-10 font-bold text-[30px] px-10 bg-green-600 text-white">
        Our mission is to create an agile, fair, fail-safe, humanist, and
        harmony working environment
      </div>
      <div className="py-10 pt-20 ">
        <h1 className="font-bold text-[35px] text-center">
          Did you feel that your interest is piqued?
        </h1>
        <p className="font-light text-neutral-400 mt-4 text-center">
          Find suitable position for you below. Feel free to contact us if you
          can't find any.
        </p>
        <div className="py-10 px-10 bg-neutral-200 mt-8 ">
          <div>
            <input
              type="text"
              placeholder="Search job.."
              className="bg-white mb-5 focus:outline-none py-2 px-3"
              onChange={(e) => setParam({ search: e.target.value })}
            />
            <button className="bg-green-600 px-3 py-2 text-white">
              Search
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {dataJob.length === 0 ? (
              <div className="my-12 col-start-2 text-center">
                job yang anda cari tidak ada
              </div>
            ) : kerja.status === "loading" ? (
              <div role="status" className="col-start-2  text-center my-10">
                <svg
                  aria-hidden="true"
                  className="inline w-12 h-12 mr-2 text-gray-200 animate-spin  fill-green-500"
                  viewBox="0 0 100 101"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              dataJob.map((val: any, key: number) => {
                return (
                  <div className="bg-white px-5 py-4 " key={key}>
                    <h3>{val.job_name}</h3>
                    <p className="font-light text-neutral-400 text-sm mt-1 mb-5">
                      {val.level}
                    </p>
                    <Link
                      href="/job"
                      className="text-green-600 text-sm font-bold"
                    >
                      APPLY
                    </Link>
                  </div>
                );
              })
            )}
          </div>
          <div className=" mt-2 flex">
            {pagination.map((val, key) => {
              return (
                <div
                  className="border bg-white w-10 h-10 shadow rounded-full flex justify-center items-center text-green-600 mr-2 hover:cursor-pointer"
                  key={key}
                >
                  {val}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="px-10 py-10 text-neutral-500">
        <div>Follow us</div>
      </div>
    </main>
  );
}
