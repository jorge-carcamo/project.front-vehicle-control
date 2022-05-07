import React from "react";

const VehicleResult = ({vehicle}) => {
    const {plate, brand, model, version, year, color, visit, house} = vehicle
  return (
    <div>
        <p>Patente: {plate}</p>
        <p>Marca: {brand}</p>
        <p>Modelo: {model}</p>
        <p>Versión: {version}</p>
        <p>Año: {year}</p>
        <p>Color: {color}</p>
        <p>Visita: {visit? "Si": "No"}</p>
        <p>Casa: {house}</p>
    </div>
  );
};

export default VehicleResult;
