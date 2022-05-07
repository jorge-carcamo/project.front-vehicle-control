import React from "react";

const VehicleResult = ({ vehicle }) => {
  const { brand, model, year, color, visit, house } = vehicle;
  return (
    <div>
      <p>
        <b>Marca: </b>
        {brand ? brand.toUpperCase() : ""}
      </p>
      <p>
        <b>Modelo: </b> {model ? model.toUpperCase() : ""}
      </p>
      <p>
        <b>Año: </b> {year ? year : ""}
      </p>
      <p>
        <b>Color: </b> {color ? color.toUpperCase() : "NO DISPONIBLE"}
      </p>
      <p>
        <b>Visita: </b>
        {visit ? "SI" : "NO" || "NO DISPONIBLE"}
      </p>
      <p>
        <b>Casa: </b> {house ? house.toUpperCase() : "NO DISPONIBLE"}
      </p>
    </div>
  );
};

export default VehicleResult;
