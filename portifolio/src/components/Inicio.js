import React from "react";

const Inicio = () => {
  return (
    <section id="inicio" className="row m-0 p-0 shapedividers_com-3747">
      <div className="col-md-5  d-flex justify-content-center align-items-center flex-column ">
        <h2 className="text-white text-shadow">Bruno Micalli</h2>
        <span className="text-white text-shadow" id="subtitle">
          Desenvolvedor Java FullStack
        </span>
      </div>

      <div className="col-md-7 d-flex justify-content-end align-items-end">
        <div id="arraste" className="d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-arrow-down text-white pe-2 fs-2"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
            />
          </svg>
          <a href="#about">Arraste para mais</a>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
