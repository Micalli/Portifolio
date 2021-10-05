import emailjs from "emailjs-com";
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

import "../styles/EmailForm.css";


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
            
            <form onSubmit={sendEmail}>
            <Toaster
            position="top-right"
            reverseOrder={false}
            />
                    <div className="row pt-5 mx-auto">
                        
                        <div className="col-lg-8 col-sm-12 form-group mx-auto mb-3">
                            <label>Nome</label>
                            <input type="text" autoFocus className="form-control" required placeholder="Seu nome" name="name"/>
                        </div>
                        <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto mb-3">
                        <label>Email</label>
                            <input type="email" className="form-control" required placeholder="Seu email" name="email"/>
                        </div>

                        <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto ">
                        <label>Mensagem</label>
                            <textarea className="form-control l" id="" cols="30" rows="8" required placeholder="Sua mensagem" name="message"></textarea>
                        </div>
                        <div className="col-lg-8 col-sm-12 pt-3 mx-auto d-flex justify-content-center mt-4">
                            <input type="submit" className="btn btn-primary b" value="Enviar mensagem"></input>
                        </div>
                    </div>
                </form>
        </div>
    )
}