import { useState } from "react";

const MyForm = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    edad: "",
    estudios: false,
  });

  const cambioNombre = (e) => {
    setDatos((valores) => ({
      ...valores,
      nombre: e.target.value,
    }));
  };

  const cambioEdad = (e) => {
    setDatos((valores) => ({
      ...valores,
      edad: e.target.value,
    }));
  };

  const cambioEstudio = () => {
    setDatos((valores) => ({
      ...valores,
      estudios: !valores.estudios,
    }));
  };

  const procesar = (e) => {
    e.preventDefault();
    alert(
      `Información ingresada: ${datos.nombre}, ${datos.edad} años, ${
        datos.estudios ? "con estudios" : "sin estudios"
      }`
    );
  };

  return (
    <>
      <div className="col-md-6 mb-5" style={{ borderRight: "1px solid #333" }}>
        <h3 className="text-center font-weight-bold">
          Ingresar Datos <hr />
        </h3>
        <form onSubmit={procesar}>
          <div className="mb-3">
            <label htmlFor="Nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              value={datos.nombre}
              onChange={cambioNombre}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Edad" className="form-label">
              Edad
            </label>
            <input
              type="number"
              className="form-control"
              value={datos.edad}
              onChange={cambioEdad}
            />
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={datos.estudios}
              onChange={cambioEstudio}
            />
            <label className="form-check-label" htmlFor="">
              Estudios:
            </label>
          </div>

          <div className="d-grid gap-2 mb-5 mt-3">
            <button className="btn btn-primary" type="button">
              Enviar Información
            </button>
          </div>
        </form>
      </div>
      <div className="col-md-6">
        <h3 className="text-center font-weight-bold">
          Datos Ingresados <hr />
        </h3>

        <ul className="list-group list-group-flush">
          <li className="list-group-item custom_list">
            Nombre: {datos.nombre}
          </li>
          <li className="list-group-item custom_list">Edad: {datos.edad}</li>
          <li className="list-group-item custom_list">
            Estudios: {datos.estudios ? "con estudios" : "sin estudios"}
          </li>
        </ul>
      </div>
    </>
  );
};

export default MyForm;
