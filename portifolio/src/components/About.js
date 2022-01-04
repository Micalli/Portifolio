import React from "react";

import ImgPerfil from "../assets/perfil.png";


const About = () => {
  return (
    <section className="container mt-5" id="about">
      <div className="row w-100">
        <div className="col-md-12" data-aos="fade-down">
          <h2 className="pt-3">Sobre</h2>
          <p>
            Sou apaixonado por novos desafios, proativo, paciente, gosto de
            trabalhar em equipe, a curiosidade me impulsiona em aprender e
            desenvolver coisas novas e também procuro sempre me desenvolver para
            colaborar com novas propostas.
          </p>
        </div>
      </div>
      <div className="row mt-4 ">
        <div className="col-md-4 " data-aos="fade-right">
          <img
            className="img-fluid shadowx"
            src={ImgPerfil}
            alt="Foto do Bruno"
            data-aos="fade-right"
          />
        </div>

        <div className="col-md-8 mt-1" data-aos="fade-up">
          <h3>Desenvolvedor Web</h3>
          <p>Experiência com pequeno projetos e em busca de oportunidades, sempre em constante aprendizado.</p>

          <div className="row mb-3 ">
            <div className="col-md-6 ">
              <ul className="list-group list-group-flush fs-5 ">
                <li className="list-group-item ">
                  Niver: <span className="fw-lighter">31 de julho de 1999</span>
                </li>
                <li className="list-group-item ">
                  Idade: <span className="fw-lighter">22 Anos</span>
                </li>

                <li className="list-group-item">
                  Estado: <span className="fw-lighter">São Paulo</span>
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item">
                  Hobby: <span className="fw-lighter">São Paulo</span>
                </li>
                <li className="list-group-item">
                  Ultimo Projeto: 
                  <a
                    href="https://egideonline.herokuapp.com/#/inicio"
                    target="_blank"
                    className="egide  text-decoration-none fw-lighter"
                  >
                     {" "}Égide.com
                  </a>
                </li>
                <li className="list-group-item">
                  Experiência: <span className="fw-lighter">7 meses</span>
                </li>
              </ul>
            </div>
          </div>
          <p>
            Atualmente estou com foco em aprender ReactJS e fazer a maioria dos
            projetos com ele.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
