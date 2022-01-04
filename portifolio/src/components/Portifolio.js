import React from "react";

import Carousel from "react-bootstrap/Carousel";

import Netiflix from "../assets/netflix.png";
import letMeAsk from "../assets/letmeask.png";
import Curriculo from "../assets/Curriculo.png";
import Todoapp from "../assets/TodoApp.png";
import GitHubApi from "../assets/GitHubApi.png";

const Portifolio = () => {
  return (
    <section id="portifolio" className="section-bg mt-5">
      <div className="container pb-5 pt-5">
        <h2 className="pb-4">Portifólio</h2>

        <Carousel variant="dark" data-aos="zoom-in-up">
          <Carousel.Item>
            <img className="d-block w-100 " src={letMeAsk} alt="First slide" />

            <Carousel.Caption className="subtitle">
              <h5 className="subtitle">LetMeAsk</h5>
              <p className="subtitle">
                Plataforma para colocar duvidas,usando React, Sass, Typescript e
                Firebase feito durante o Evento da RocketSeat.
              </p>
              <div className="d-flex justify-content-center ">
                <a
                  href="https://github.com/Micalli/let_me_ask"
                  target="_blank"
                  className="btn btn-outline-dark letmeask-btn  me-3"
                >
                  <i className="bi bi-github bb"></i>
                </a>
                <a
                  href="https://letmeask-v01.web.app/"
                  target="_blank"
                  className="btn btn-outline-primary letmeask-btn"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Netiflix} alt="Second slide" />
            <Carousel.Caption className="text-white">
              <h5 className="white">Clone do Netiflix</h5>
              <p>Clone do netflix utilizando reactJS e API do moviedb</p>
              <div className="d-flex justify-content-center">
                <a
                  href="https://github.com/Micalli/netflix-clone"
                  target="_blank"
                  className="btn btn-outline-dark me-3 netflix-btn"
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Curriculo} alt="Third slide" />
            <Carousel.Caption>
              <h5>Curriculo</h5>
              <p>Pagina estática ultilizando HTML, CSS, JS e bootstrap;</p>
              <div className="d-flex justify-content-center">
                <a
                  href="https://github.com/Micalli/CV-Bootstrap"
                  target="_blank"
                  className="btn btn-outline-dark curriculo-btn me-3"
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 " src={Todoapp} alt="First slide" />

            <Carousel.Caption>
              <h5>To Do App</h5>
              <p>
                Plataforma para lista os afazeres ultilizando Node, React e
                MaterialUI.
              </p>
              <div className="d-flex justify-content-center">
                <a
                  href="https://github.com/Micalli/let_me_ask"
                  target="_blank"
                  className="btn btn-outline-dark todo-btn me-3"
                >
                  <i className="bi bi-github bb"></i>
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 " src={GitHubApi} alt="First slide" />

            <Carousel.Caption className="text-white">
              <h5 className="white">GitHub API</h5>
              <p>
                Site onde lista todos meus repositórios, estrelas que cada um
                tem e o respectivo link de cada repositório. Ultilizando React e
                content-loader.
              </p>
              <div className="d-flex justify-content-center">
                <a
                  href="https://github.com/Micalli/API-github"
                  target="_blank"
                  className="btn btn-outline-dark git-btn me-3"
                >
                  <i className="bi bi-github bb"></i>
                </a>
                <a
                  href="https://micalli.github.io/API-github/"
                  target="_blank"
                  className="btn btn-outline-primary git-btn"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Portifolio;
