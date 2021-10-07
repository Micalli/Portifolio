import { useEffect } from "react";

import Aos from 'aos';


import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import 'aos/dist/aos.css'

import Hamburguer from "./components/Hamburguer";
import Header from "./components/Header";

import ImgPerfil from "./assets/perfil.png";

import Netiflix from "./assets/netflix.png";
import letMeAsk from "./assets/letmeask.png";
import Curriculo from "./assets/Curriculo.png";

import "./style.css";

function App() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "emailMessage",
        "template_ay5glcf",
        e.target,
        "user_38qB5mtMcSx09BVrhR4Q9"
      )
      .then(
        (result) => {
          toast.success("Email enviado!", {
            duration: 5000,
          });
        },
        (error) => {
          toast.error("Algo de errado ocorreu");
        }
      );
    e.target.reset();
  }

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
  useEffect(() => {
    Aos.init({duration:1000});

  }, []);

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

        <section className="container mt-5" id="about">
          <div className="row w-100">
            <div className="col-md-12" data-aos="fade-down">
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
              </p>
            </div>
          </div>
          <div className="row mt-4 ">
            <div className="col-md-4 " data-aos="fade-right">
              <img
                className="img-fluid shadow"
                src={ImgPerfil}
                alt="Foto do Bruno"
                data-aos="fade-right"
              />
            </div>

            <div className="col-md-8 mt-1" data-aos="fade-up">
              <h3>Desenvolvedor Web</h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                lorem nunc, convallis facilisis venenatis et, lobortis eget
                elit. Morbi vitae ultricies dolor. Mauris tincidunt tristique
              </p>

              <div className="row mb-3">
                <div className="col-md-6">
                  <ul className="list-group list-group-flush fs-5">
                    <li className="list-group-item">
                      Niver:{" "}
                      <span className="fw-lighter">31 de julho de 1999</span>
                    </li>
                    <li className="list-group-item">
                      Idade: <span className="fw-lighter">22 Anos</span>
                    </li>
                    <li className="list-group-item">
                      Cidade:{" "}
                      <span className="fw-lighter">São Bernardo do Campo</span>
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
                        {" "}
                        Égide.com
                      </a>
                    </li>
                    <li className="list-group-item">
                      Trabalho:{" "}
                      <span className="fw-lighter">Não atuei na área</span>
                    </li>
                    <li className="list-group-item">
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

        <section className="mt-5 cv" id="curriculo">
          <div className="container pb-5">
            <h2 className="pt-3 pb-4">Curriculo</h2>

            <div className="row">
              <div className="col-md-6">
                <h3 className="cv-title">Educação</h3>
                <div className="cv-item" data-aos="fade-up"   >
                  <h4>Análise e Desenvolvimento de Sistemas</h4>
                  <h5>2021 - 2024</h5>
                  <p>
                    <em>Universidade Metodista de São Paulo</em>
                  </p>
                  <p>
                    Curso técnologo voltado em conceitos e técnicas para
                    analisar, projetar, implementar e atualizar sistemas de
                    informação para diversos setores de atividades.
                  </p>
                </div>
                <div className="cv-item" data-aos="fade-up">
                  <h4>Desenvolvedor Web Java – Fullstack </h4>
                  <h5>2021 - 2021</h5>
                  <p>
                    <em>Generation Brasil</em>
                  </p>
                  <p>
                    Nos fundamentos de programação estudamos variáveis, tipos de
                    dados, códigos e sequências utilizados em programação, foram
                    abordados os princípios da estruturação de dados, estrutura
                    e hierarquia de dados e programação orientada a objetos.
                  </p>
                </div>
                <div className="cv-item" data-aos="fade-up">
                  <h4>Técnico em Mecânica</h4>
                  <h5>2019 - 2020</h5>
                  <p>
                    <em>Colégio Termomecanica - CTM</em>
                  </p>
                  <p>
                    Ensaios e oficinas e um projeto de um redutor com objetivo
                    de dimensionar o redutor para içar uma determinada carga
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <h3 className="cv-title">Profissional</h3>
                <div className="cv-item" data-aos="fade-up">
                  <h4>Atendente telemarketing</h4>
                  <h5>2018 - 2021</h5>
                  <p>
                    <em>Atento S/A</em>
                  </p>
                  <p>Atendimento a empresas e SAC</p>
                </div>
                <div className="cv-item" data-aos="fade-up">
                  <h4>Jovem Aprendiz</h4>
                  <h5>2017 - 2017</h5>
                  <p>
                    <em>INSS - Previdência Social</em>
                  </p>
                  <p>
                    Gestão de arquivos, comunicação atendimento telefônico
                    interno e proatividade para pegar as tarefas.
                  </p>
                </div>
                <div className="cv-item" data-aos="fade-up">
                  <h4>Auxiliar Administrativo</h4>
                  <h5>2016 - 2016</h5>
                  <p>
                    <em>Imobiliária Tiradentes </em>
                  </p>
                  <p>
                    Atendimento telefônico, cadastro de clientes em tabelas,
                    digitação de contratos, gestão de documentos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portifolio" className="section-bg mt-5">
          <div className="container pb-5 pt-5">
            <h2 className="pb-4">Portifólio</h2>

            <Carousel variant="dark" data-aos="zoom-in-up">
              <Carousel.Item >
                <img
                  className="d-block w-100 "
                  src={letMeAsk}
                  alt="First slide"
                />

                <Carousel.Caption>
                  <h5>LetMeAsk</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="https://github.com/codethi/blogPessoal-front-back"
                      target="_blank"
                      className="btn btn-outline-dark me-3"
                    >
                      <i className="bi bi-github bb"></i>
                    </a>
                    <a
                      href="https://newbloggen.netlify.app/#/login"
                      target="_blank"
                      className="btn btn-outline-primary"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Netiflix}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h5 className="text-white">Clone do Netiflix</h5>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="https://github.com/codethi/blogPessoal-front-back"
                      target="_blank"
                      className="btn btn-outline-dark me-3 a"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                    <a
                      href="https://newbloggen.netlify.app/#/login"
                      target="_blank"
                      className="btn btn-outline-primary a"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Curriculo}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h5>Curriculo</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="https://github.com/codethi/blogPessoal-front-back"
                      target="_blank"
                      className="btn btn-outline-dark me-3"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                    <a
                      href="https://newbloggen.netlify.app/#/login"
                      target="_blank"
                      className="btn btn-outline-primary"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </section>

        <section className="pt-5 pb-5" id="contato">
          <div className="container mb-5">
            <h2 className="pt-3 pb-3">Contato</h2>

            <div className="row">
              <div className="col " data-aos="fade-up">
                <div className="card p-5 h-100 shadow border-0">
                  <form onSubmit={sendEmail}>
                    <Toaster position="top-right" reverseOrder={false} />
                    <div className="row pt-5 mx-auto">
                      <div className="col-lg-8 col-sm-12 form-group mx-auto mb-3">
                        <label>Nome</label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          placeholder="Seu nome"
                          name="name"
                        />
                      </div>
                      <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto mb-3">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          required
                          placeholder="Seu email"
                          name="email"
                        />
                      </div>

                      <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto ">
                        <label>Mensagem</label>
                        <textarea
                          className="form-control l"
                          id=""
                          cols="30"
                          rows="8"
                          required
                          placeholder="Sua mensagem"
                          name="message"
                        ></textarea>
                      </div>
                      <div className="col-lg-8 col-sm-12 pt-3 mx-auto d-flex justify-content-center mt-4  ">
                        <button className="btn btn-primary b arrow">
                          Enviar mensagem
                        </button>
                      </div>
                    </div>
                  </form>
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
