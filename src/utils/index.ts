const getToken = () => {
  let token = typeof window !== "undefined" && localStorage.getItem("token");
  return token;
};

export { getToken };
