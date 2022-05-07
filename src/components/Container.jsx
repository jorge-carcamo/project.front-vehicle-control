import React from "react";
import VechileResult from "./VehicleResult";
import useFetch from "../hooks/useFecth";

const Container = () => {
    const { data, setData } = useFetch();
  return (
    <main>
      <input
        type="text"
        placeholder="Ingrese una patente"
        value={data.plate}
        onChange={(e) => setData({ ...data, plate: e.target.value })}
      />
      <br />
      {console.log(data.results)}
      {data.results ? <VechileResult vehicle={data.results}/> : <p>No existe</p>}
    </main>
  );
};

export default Container;
