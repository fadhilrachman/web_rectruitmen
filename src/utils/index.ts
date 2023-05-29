const getToken = () => {
  let token = typeof window !== "undefined" && localStorage.getItem("token");
  return token;
};
const convertDate = (param: Date) => {
  console.log({ param });

  const date = new Date(param);

  const month = date.toLocaleDateString("id-ID", {
    month: "long",
  });
  const year = date.toLocaleDateString("id-ID", {
    year: "numeric",
  });

  const result = ` ${month} ${year}`;
  return result;
};

export { getToken, convertDate };
