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
function formatRupiah(angka: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(angka);
}

export { getToken, convertDate, formatRupiah };
