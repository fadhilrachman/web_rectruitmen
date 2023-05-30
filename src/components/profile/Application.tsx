"use client";
import React, { useEffect } from "react";
import StatusApp from "../StatusApp";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/reducer";
import { getDataApplication } from "@/redux/Application";

const Application = () => {
  const user = useSelector((state: RootState) => state.User);
  const application = useSelector((state: RootState) => state.Application);
  const dataApplication = application.data?.data;
  const dataUser = user.dataDetail;
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  useEffect(() => {
    if (dataUser._id) {
      dispatch(getDataApplication({ user: dataUser._id }));
    }
  }, []);

  return (
    <div className="mt-14">
      {application.status === "loading" ? (
        <div>
          <div className="bg-gray-300 animate-pulse h-28"></div>
          <div className="bg-gray-300 animate-pulse h-28 mt-5"></div>
        </div>
      ) : dataApplication?.length == 0 ? (
        "tidak ada"
      ) : (
        dataApplication?.map((val: any, key: number) => {
          return (
            <div
              className={`border mt-5 px-5 py-4f flex flex-col sm:flex-row justify-between py-4 ${
                val?.notes && "opacity-70"
              }`}
            >
              <div>
                <h1 className="text-2xl font-semibold">{`${val?.job.job_name}(${val?.job.level})`}</h1>
                <div className="text-neutral-400  ">
                  <p>Fulltime</p>
                  <p>
                    Salary{" "}
                    <span className="text-green-600 underline">
                      Rp.{val?.job.salary}
                    </span>
                  </p>
                </div>
                {val?.notes && (
                  <div className="mt-4 text-sm text-red-500 italic">
                    {val.notes}
                  </div>
                )}
              </div>
              <StatusApp text={val?.status} />
            </div>
          );
        })
      )}

      {/* <div className="border px-5 py-4f flex flex-col sm:flex-row justify-between py-4">
        <div>
          <h1 className="text-2xl font-semibold">Frontend Devloper(junior)</h1>
          <div className="text-neutral-400  ">
            <p>Fulltime</p>
            <p>
              Salary{" "}
              <span className="text-green-600 underline">Rp.12.000.00</span>
            </p>
          </div>
          <div className="mt-4 text-sm text-red-500 italic">
            Notes: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            distinctio.
          </div>
        </div>
        <StatusApp text="in rieview" />
      </div> */}
    </div>
  );
};

export default Application;
