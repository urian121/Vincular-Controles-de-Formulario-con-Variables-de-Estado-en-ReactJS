import MyForm from "./components/MyForm.jsx";

function App() {
  return (
    <>
      <div className="row justify-content-md-center mt-5 mb-5">
        <div className="col-md-12 mb-5">
          <h2 className="text-center mb-5 mt-3 font-weight-bold">
            Vinculando Controles de Formulario con <br /> Variables de Estado en
            ReactJS
          </h2>
        </div>

        <MyForm />
      </div>
    </>
  );
}

export default App;
