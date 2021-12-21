import React from "react";

const Abilities = () => {
  return (
    <section className="mt-5 section-bg" id="ability">
      <div className="container pb-5">
        <h2 className="pt-5">Habilidades</h2>
        <p>
          Em todo tempo como profissional da tecnologia eu adquiri alguma
          habilidades técnicas, a maioria delas estão aq, de acordo com a
          porcentagem de conhecimento que eu acredito ter em cada uma delas.
        </p>
        {/*Barra de Progresso*/}
        <div className="row mb-4">
          <div className="col-md-6">
            <p className="mt-3 mb-0">HTML</p>
            <div className="progress">
              <div
                className="progress-bar bar1"
                role="progressbar"
                data-aos="fade-right"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                70%
              </div>
            </div>
            <p className="mt-3 mb-0">CSS</p>
            <div className="progress">
              <div
                className="progress-bar bar2"
                data-aos="fade-right"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                75%
              </div>
            </div>
            <p className="mt-3 mb-0">JavaScript</p>
            <div className="progress">
              <div
                className="progress-bar bar3"
                data-aos="fade-right"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                60%
              </div>
            </div>
            <p className="mt-3 mb-0">Java</p>
            <div className="progress">
              <div
                className="progress-bar bar4"
                data-aos="fade-right"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                70%
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <p className="mt-3 mb-0">SpringBoot</p>
            <div className="progress">
              <div
                className="progress-bar bar5"
                data-aos="fade-right"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                70%
              </div>
            </div>
            <p className="mt-3 mb-0">Angular</p>
            <div className="progress">
              <div
                className="progress-bar bar6"
                data-aos="fade-right"
                role="progressbar"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                30%
              </div>
            </div>
            <p className="mt-3 mb-0">ReactJS</p>
            <div className="progress">
              <div
                className="progress-bar bar7"
                data-aos="fade-right"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <p className="mt-3 mb-0">Bootstrap</p>
            <div className="progress">
              <div
                className="progress-bar bar8"
                data-aos="fade-right"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                85%
              </div>
            </div>
          </div>
        </div>

        <hr className="w-50 me-auto ms-auto m-0" />
        <div className="row">
          <div className="col-md-6">
            <p className="mt-2 mb-0">Trabalho em equipe</p>
            <div className="progress">
              <div
                className="progress-bar bar9"
                data-aos="fade-right"
                role="progressbar"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                95%
              </div>
            </div>

            <p className="mt-3 mb-0">Proatividade</p>
            <div className="progress">
              <div
                className="progress-bar bar10"
                data-aos="fade-right"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                75%
              </div>
            </div>

            <p className="mt-3 mb-0">Orientação a detalhes</p>
            <div className="progress">
              <div
                className="progress-bar bar11"
                data-aos="fade-right"
                role="progressbar"
                aria-valuenow="88"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                88%
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <p className="mt-2 mb-0">Comunicação</p>
            <div className="progress">
              <div
                className="progress-bar bar12"
                data-aos="fade-right"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                60%
              </div>
            </div>

            <p className="mt-3 mb-0">Empatia</p>
            <div className="progress">
              <div
                className="progress-bar bar13"
                data-aos="fade-right"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                80%
              </div>
            </div>

            <p className="mt-3 mb-0">Comprometimento</p>
            <div className="progress">
              <div
                className="progress-bar bar14"
                data-aos="fade-right"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                90%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abilities;
