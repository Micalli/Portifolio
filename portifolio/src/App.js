import ContactUs from "./components/EmailForm";
import Hamburguer from "./components/Hamburguer";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import ImgPerfil from "./assets/perfil.png";
import Logo from "./assets/logo.png";
import { useEffect } from "react";

import "./style.css";

function App() {
  useEffect(() => {
    const menuMobile = document.querySelector(".menu-mobile");
    const body = document.querySelector("body");

    menuMobile.addEventListener("click", () => {
      body.classList.toggle("menu-nav-active");
    });

    const navItem = document.querySelectorAll(".nav-item");
    navItem.forEach((item) => {
      item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")) {
          body.classList.remove("menu-nav-active");
          menuMobile.classList.replace("bi-x", "bi-list");
        }
      });
    });
  });

  return (
    <body>
      <Hamburguer />
      <Header />
      <main id="main">
        <section id="inicio" className="row m-0 p-0">
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
                class="bi bi-arrow-down text-white pe-2 fs-2"
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

        <section className="container mt-5" id="about">
          <div className="row w-100">
            <div className="col-md-12">
              <h2 className="pt-3">Sobre</h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                lorem nunc, convallis facilisis venenatis et, lobortis eget
                elit. Morbi vitae ultricies dolor. Mauris tincidunt tristique
                tincidunt. Aenean non ligula non quam egestas viverra vel quis
                sem. Praesent lobortis nulla nec rhoncus rhoncus. In laoreet
                varius gravida. Phasellus gravida odio massa, a condimentum
                velit pellentesque nec. Phasellus vitae risus at magna fringilla
                eleifend. Aliquam facilisis commodo nibh nec sodales. Morbi a
                lobortis purus. Maecenas arcu ipsum, tristique at mi sit amet,
                porttitor imperdiet lectus. Etiam vel porttitor elit, in
                ultricies tortor. Nam iaculis tincidunt consequat. Nunc ipsum
                orci, consequat a tincidunt sed, malesuada sit amet mi. Duis
                euismod finibus dolor consectetur tincidunt. Vivamus tincidunt
                fringilla ligula quis egestas. Morbi vel viverra purus, non
                blandit sem. Maecenas ligula erat, elementum eu lectus ut,
                ultricies cursus nisi. Sed lacinia semper volutpat. Pellentesque
                dictum metus sit amet justo elementum tincidunt sit amet a
                tellus. Aenean eleifend est eu mauris egestas, vel pharetra
                augue posuere. Morbi eget libero imperdiet, viverra erat quis,
                aliquet augue. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. In ut lacus pulvinar,
                malesuada neque quis, vehicula massa. Fusce finibus dapibus
                purus, sed consectetur augue vestibulum eget.
              </p>
            </div>
          </div>
          <div className="row mt-4 ">
            <div className="col-md-4">
              <img
                className="img-fluid shadow"
                src={ImgPerfil}
                alt="Foto do Bruno"
              />
            </div>

            <div className="col-md-8">
              <h3>Desenvolvedor Web</h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                lorem nunc, convallis facilisis venenatis et, lobortis eget
                elit. Morbi vitae ultricies dolor. Mauris tincidunt tristique
              </p>

              <div className="row mb-3">
                <div className="col-md-6">
                  <ul class="list-group list-group-flush fs-5">
                    <li class="list-group-item">
                      Niver:{" "}
                      <span className="fw-lighter">31 de julho de 1999</span>
                    </li>
                    <li class="list-group-item">
                      Idade: <span className="fw-lighter">22 Anos</span>
                    </li>
                    <li class="list-group-item">
                      Cidade:{" "}
                      <span className="fw-lighter">São Bernardo do Campo</span>
                    </li>
                    <li class="list-group-item">
                      Estado: <span className="fw-lighter">São Paulo</span>
                    </li>
                  </ul>
                </div>

                <div className="col-md-6">
                  <ul class="list-group list-group-flush fs-5">
                    <li class="list-group-item">
                      Hobby: <span className="fw-lighter">São Paulo</span>
                    </li>
                    <li class="list-group-item">
                      Ultimo Projeto:
                      <a
                        href="https://egideonline.herokuapp.com/#/inicio"
                        target="_blank"
                        className="egide  text-decoration-none fw-lighter"
                      >
                        {" "}
                        Égide.com
                      </a>
                    </li>
                    <li class="list-group-item">
                      Trabalho:{" "}
                      <span className="fw-lighter">Não atuei na área</span>
                    </li>
                    <li class="list-group-item">
                      Experiência: <span className="fw-lighter">4 meses</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                lorem nunc, convallis facilisis venenatis et, lobortis eget
                elit. Morbi vitae ultricies dolor. Mauris tincidunt tristique
              </p>
            </div>
          </div>
        </section>

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
                <div class="progress">
                  <div
                    class="progress-bar bar1"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    70%
                  </div>
                </div>
                <p className="mt-3 mb-0">CSS</p>
                <div class="progress">
                  <div
                    class="progress-bar bar2"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    75%
                  </div>
                </div>
                <p className="mt-3 mb-0">JavaScript</p>
                <div class="progress">
                  <div
                    class="progress-bar bar3"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    60%
                  </div>
                </div>
                <p className="mt-3 mb-0">Java</p>
                <div class="progress">
                  <div
                    class="progress-bar bar4"
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
                <div class="progress">
                  <div
                    class="progress-bar bar5"
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    50%
                  </div>
                </div>
                <p className="mt-3 mb-0">Angular</p>
                <div class="progress">
                  <div
                    class="progress-bar bar6"
                    role="progressbar"
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    30%
                  </div>
                </div>
                <p className="mt-3 mb-0">ReactJS</p>
                <div class="progress">
                  <div
                    class="progress-bar bar7"
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    50%
                  </div>
                </div>
                <p className="mt-3 mb-0">Bootstrap</p>
                <div class="progress">
                  <div
                    class="progress-bar bar8"
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
                <p class="mt-2 mb-0">Trabalho em equipe</p>
                <div class="progress">
                  <div
                    class="progress-bar bar9"
                    data-anime="left"
                    role="progressbar"
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    95%
                  </div>
                </div>

                <p class="mt-3 mb-0">Proatividade</p>
                <div class="progress">
                  <div
                    class="progress-bar bar10"
                    data-anime="left"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    75%
                  </div>
                </div>

                <p class="mt-3 mb-0">Orientação a detalhes</p>
                <div class="progress">
                  <div
                    class="progress-bar bar11"
                    data-anime="left"
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
                <p class="mt-2 mb-0">Comunicação</p>
                <div class="progress">
                  <div
                    class="progress-bar bar12"
                    data-anime="left"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    60%
                  </div>
                </div>

                <p class="mt-3 mb-0">Empatia</p>
                <div class="progress">
                  <div
                    class="progress-bar bar13"
                    data-anime="left"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    80%
                  </div>
                </div>

                <p class="mt-3 mb-0">Comprometimento</p>
                <div class="progress">
                  <div
                    class="progress-bar bar14"
                    data-anime="left"
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
      </main>
    </body>
  );
}

export default App;
