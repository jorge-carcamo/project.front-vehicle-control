import React from "react";
import VechileResult from "./VehicleResult";
import useVehicle from "../hooks/useVehicle";

const Container = () => {
  const { data, setData } = useVehicle();
  const toInputUppercase = (e) => {
    e.target.value = ("" + e.target.value).toUpperCase();
  };

  const handleOnChange = (e) => {
    //if (e.target.value.length === 6) {
    setData({ ...data, plate: e.target.value });
    //
  };
  return (
    <main>
      <input
        type="text"
        maxLength={6}
        placeholder="Ingrese una patente"
        value={data.plate}
        onChange={handleOnChange}
        onInput={toInputUppercase}
      />
      <br />

      {data.results ? (
        <VechileResult vehicle={data.results} />
      ) : (
        <p>No existe</p>
      )}
    </main>
  );
};

export default Container;
