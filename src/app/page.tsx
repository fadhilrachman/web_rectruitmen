import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

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
    <main className="font-mono">
      <div className="flex flex-col justify-between border min-h-screen pb-20 px-10">
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
            />
            <button className="bg-green-600 px-3 py-2 text-white">
              Search
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {job.map((val, key) => {
              return (
                <div className="bg-white px-5 py-4 " key={key}>
                  <h3>{val.title}</h3>
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
            })}
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
