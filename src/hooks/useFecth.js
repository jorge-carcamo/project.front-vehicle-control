import { useState, useEffect } from "react";
import API from "../api/vehicle";

const useFecth = () => {
  const [data, setData] = useState({
    plate: "",
    results: null,
  });

  useEffect(() => {
    if (data.plate !== "") {
      const timeoutId = setTimeout(() => {
        const fetch = async () => {
          try {
            const res = await API.get(`${data.plate}`);
            setData({ ...data, results: res.data });
          } catch (err) {
            console.error(err);
          }
        };
        fetch();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [data.plate]);

  return { data, setData };
};

export default useFecth;
