import React from "react";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

import Loading from "react-loading";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setLoader(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_TYPE_EMAIL,
        process.env.REACT_APP_TEMPLATE,
        e.target,
        process.env.REACT_APP_USER
      )
      .then(
        (result) => {
          toast.success("Email enviado!", {
            duration: 5000,
          });
          setLoader(false);
        },
        (error) => {
          toast.error("Algo de errado ocorreu");
          setLoader(false);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  }
  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeMessage = (event) => {
    setMessage(event.target.value);
  };
  useEffect(() => {
    const inputName = document.querySelector(".name");
    const inputEmail = document.querySelector(".email");
    const inputMessage = document.querySelector(".message");

    name == ""
      ? inputName.classList.remove("fill")
      : inputName.classList.add("fill");

    if (email.includes("@") && email.includes(".com")) {
      inputEmail.classList.add("fill");
    } else {
      inputEmail.classList.remove("fill");
    }
    message == ""
      ? inputMessage.classList.remove("fill")
      : inputMessage.classList.add("fill");
  }, []);

  return (
    <section className="pt-5 pb-5" id="contato">
      <div className="container mb-5">
        <h2 className="pt-3 pb-3">Contato</h2>

        <div className="row">
          <div className="col " data-aos="fade-up">
            <div className="card p-5 h-100  border-0 cardx">
              <form onSubmit={sendEmail}>
                <Toaster position="top-right" reverseOrder={false} />
                <div className="row pt-5 mx-auto">
                  <div className="col-lg-8  form-group mb-4 mx-auto ">
                    <label className=" mb-2">Nome</label>
                    <input
                      type="text"
                      className="form-control name"
                      required
                      placeholder="Seu nome"
                      name="name"
                      value={name}
                      onChange={onChangeName}
                    />
                  </div>
                  <div className="col-lg-8  form-group mb-4 mx-auto ">
                    <label className=" mb-2">Email</label>
                    <input
                      type="email"
                      className="form-control email"
                      required
                      placeholder="Seu email"
                      name="email"
                      value={email}
                      onChange={onChangeEmail}
                    />
                  </div>

                  <div className="col-lg-8  form-group  mx-auto ">
                    <label className=" mb-2">Mensagem</label>
                    <textarea
                      className="form-control l message"
                      id=""
                      cols="30"
                      rows="8"
                      required
                      placeholder="Sua mensagem"
                      name="message"
                      value={message}
                      onChange={onChangeMessage}
                    ></textarea>
                  </div>
                  <div className="col-lg-8 col-sm-12 pt-3 mx-auto d-flex justify-content-center mt-4  ">
                    <button
                      id="btn-enviar"
                      className=" d-flex btn btn-primary "
                    >
                      Enviar mensagem
                      {loader ? (
                        <Loading
                          className="loading"
                          type="spin"
                          color="#000"
                          height={20}
                          width={20}
                        />
                      ) : (
                        <div></div>
                      )}
                      <div className="traditional"></div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
