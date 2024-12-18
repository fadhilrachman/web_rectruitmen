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
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
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
  const dataJob = kerja.data.data;
  const totalPage = kerja.data.total_page;
  const paginationArray = Array.from(
    { length: totalPage },
    (_, index) => index + 1
  );
  const [param, setParam] = useState<QueryParam>({
    search: "",
    page: 1,
  });

  useEffect(() => {
    dispatch(getDataJob(param));
    console.log({ totalPage });
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
  const particlesInit = async (engine: any) => {
    // Load Slim untuk partikel ringan
    await loadSlim(engine);
  };
  return (
    <main className="">
      <div className="relative !h-screen bg-gradient-to-b ">
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="z-10"
          options={{
            fullScreen: {
              enable: true,
              zIndex: -1, // Letakkan di latar belakang
            },
            background: {
              color: { value: "#16A34A" }, // Warna background
            },
            particles: {
              number: { value: 100, density: { enable: true, area: 800 } },
              color: { value: "#ffffff" }, // Warna partikel
              shape: { type: "circle" }, // Bentuk partikel
              opacity: { value: 0.7, random: true }, // Transparansi
              size: { value: { min: 1, max: 4 }, random: true }, // Ukuran partikel
              move: {
                enable: true,
                speed: 1.5, // Kecepatan partikel
                direction: "bottom", // Jatuh ke bawah
                outModes: { default: "out" }, // Reset posisi partikel
              },
            },
            detectRetina: true,
          }}
        />
        <Navbar />
        <div className="absolute  mt-20 inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in">
            Hone your skill in an
            <span className="text-yellow-300"> agile</span>,{" "}
            <span className="text-yellow-300">techy</span>, <br /> and
            <span className="text-yellow-300"> ever-growing</span> environment
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            We invite the best talents to collaborate with us in challenging
            projects from all around the world.
          </p>
          <a
            href="#"
            className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Join Us
          </a>
        </div>
      </div>
      <div className="z-50 bg-white text-center py-16 border px-10">
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

      <div className="text-center py-16 font-bold text-[30px] px-10 bg-green-600 text-white">
        Our mission is to create an agile, fair, fail-safe, humanist, and
        harmony working environment
      </div>
      <div className="py-16 bg-white ">
        <h1 className="font-bold text-[35px] text-center">
          Did you feel that your interest is piqued?
        </h1>
        <p className="font-light text-neutral-400 mt-4 text-center">
          Find suitable position for you below. Feel free to contact us if you
          can't find any.
        </p>
        <div className="py-10 px-10  mt-8 ">
          <div>
            <input
              type="text"
              placeholder="Search job.."
              className=" mb-5 bg-neutral-200 focus:outline-none py-2 px-3 w-full sm:w-min"
              onChange={(e) => setParam({ ...param, search: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {kerja.status === "loading" ? (
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
            ) : dataJob?.length === 0 ? (
              <div className="my-12 col-start-2 text-center">
                job yang anda cari tidak ada
              </div>
            ) : (
              dataJob?.map((val: any, key: number) => {
                return (
                  <div className="bg-neutral-200 px-5 py-4 " key={key}>
                    <h3>{val.job_name}</h3>
                    <p className="font-light text-neutral-400 text-sm mt-1 mb-5">
                      {val.level}
                    </p>
                    <Link
                      href={`/job/${val._id}`}
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
            {paginationArray.map((val, key) => {
              return (
                <div
                  className={`border bg-white w-10 h-10 shadow rounded-full flex justify-center items-center ${
                    val === param.page && "text-green-600"
                  } mr-2 hover:cursor-pointer`}
                  key={key}
                  onClick={() => setParam({ ...param, page: val })}
                >
                  {val}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="px-10 py-10 text-white bg-green-600">
        <div>Created by Muhammad Fadhil Rahman</div>
      </div>
    </main>
  );
}
