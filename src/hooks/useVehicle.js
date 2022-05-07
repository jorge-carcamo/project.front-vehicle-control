import { useState, useEffect } from "react";
import { API_V1, API_V2 } from "../api/vehicle";

const useVehicle = () => {
  const [data, setData] = useState({
    plate: "",
    results: null,
  });

  useEffect(() => {
    if (data.plate !== "") {
      const timeoutId = setTimeout(() => {
        const fetch = async () => {
          try {
            let res = await API_V1.get(`${data.plate.toLowerCase()}`);
            if (res.data === "") {
              const fetch = async () => {
                try {
                  res = await API_V2.get(
                    `registro_civil?patente=${data.plate.toLowerCase()}`,
                    {}
                  );
                  const newInput = ({ marca, modelo, ano_fabricacion }) => ({
                      plate: data.plate,
                      brand: marca,
                      model: modelo,
                      year: ano_fabricacion,
                    }),
                    input = newInput(res.data);
                  setData({ ...data, results: input });
                } catch (err) {
                  console.error(err);
                }
              };
              fetch();
            } else {
              setData({ ...data, results: res.data });
            }
          } catch (err) {
            console.error(err);
          }
        };
        fetch();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.plate]);

  return { data, setData };
};

export default useVehicle;
