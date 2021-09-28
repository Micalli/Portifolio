import emailjs from "emailjs-com";
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function EmailForm() {

      function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('emailMessage', 'template_ay5glcf', e.target, 'user_38qB5mtMcSx09BVrhR4Q9')

        .then((result) => {
            toast.success('Email enviado!')
           
        }, (error) => {
            toast.error("Algo de errado ocorreu")
            
        });
        e.target.reset()
    }

    return(
        <div>
            <div className="container">
            <h2>Contato</h2>
            <form onSubmit={sendEmail}>
            <Toaster
            position="top-right"
            reverseOrder={false}
            />
                    <div className="row pt-5 mx-auto">
                        
                        <div className="col-lg-8 col-sm-12 form-group mx-auto">
                            <label>Nome</label>
                            <input type="text" autoFocus className="form-control" required placeholder="Nome" name="name"/>
                        </div>
                        <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
                        <label>Email</label>
                            <input type="email" className="form-control" required placeholder="Seu email" name="email"/>
                        </div>

                        <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
                        <label>Mensagem</label>
                            <textarea className="form-control" id="" cols="30" rows="8" required placeholder="Sua mensagem" name="message"></textarea>
                        </div>
                        <div className="col-lg-8 col-sm-12 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Enviar mensagem"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}