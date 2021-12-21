import React from "react";

const Curriculum = () => {
  return (
    <section className="mt-5 cv" id="curriculo">
      <div className="container pb-5">
        <h2 className="pt-3 pb-4">Curriculo</h2>

        <div className="row">
          <div className="col-md-6">
            <h3 className="cv-title">Educação</h3>
            <div className="cv-item" data-aos="fade-up">
              <h4>Análise e Desenvolvimento de Sistemas</h4>
              <h5>2021 - 2024</h5>
              <p>
                <em>Universidade Metodista de São Paulo</em>
              </p>
              <p>
                Curso técnologo voltado em conceitos e técnicas para analisar,
                projetar, implementar e atualizar sistemas de informação para
                diversos setores de atividades.
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
                abordados os princípios da estruturação de dados, estrutura e
                hierarquia de dados e programação orientada a objetos.
              </p>
            </div>
            <div className="cv-item" data-aos="fade-up">
              <h4>Técnico em Mecânica</h4>
              <h5>2019 - 2020</h5>
              <p>
                <em>Colégio Termomecanica - CTM</em>
              </p>
              <p>
                Ensaios e oficinas e um projeto de um redutor com objetivo de
                dimensionar o redutor para içar uma determinada carga
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
                Gestão de arquivos, comunicação atendimento telefônico interno e
                proatividade para pegar as tarefas.
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
  );
};

export default Curriculum;
