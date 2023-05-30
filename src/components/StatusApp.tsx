import React from "react";

const StatusApp = (param: { text: string }) => {
  let color: string = "";
  switch (param.text) {
    case "in review":
      color = "text-neutral-400";
      break;
    case "unsuccessful":
      color = "text-red-500";
      break;

    default:
      color = "text-green-600";

      break;
  }

  return <p className={`${color} mt-5 sm:mt-0`}>{param.text}</p>;
};

export default StatusApp;
