import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contacto = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_5remx2c', 'template_4eqursn', form.current, 'Nk2bGHKmOzYCMegCk')
        .then((result) => {
            alert("Mensaje enviado con éxito, gracias por contactarse"  );
        }, (error) => {
            console.log(error.text);
        });
    };


    const btn = document.getElementById('button');

    return (

      <div id="contacto" className="sm:flex dark:bg-negro" >
    <div className="w-full bg-zinc-300 pt-10 dark:bg-negro text-blanco">
      <h1 className="text-5xl font-bold pt-1 text-negro dark:text-blanco">¡Envíame un mensaje! </h1>
      <h2 className="text-3xl p-2 pt-3 text-negro dark:text-blanco">
        {" "}
        ¿Tienes alguna pregunta o propuesta, o simplemente quieres saludar?
        Adelante.{" "}
      </h2>

      <form ref={form} onSubmit={sendEmail}>

            <div className="pl-5 pb-16 ">
        <div className="sm:flex-col sm:text-center  justify-evenly  pt-10">
          <input
            type="text"
            placeholder="Ingrese su nombre"
            name="user_name"
            className="focus:outline-none text-center bg-zinc-300 text-2xl text-negro border-b border-t-0 border-l-0 border-r-0  border-secundario 
            dark:border-blanco dark:bg-negro dark:cursor-blanco dark:caret-primario dark:text-blanco"
          ></input>
          <input
            type="email"
            placeholder="Ingrese su Email"
            name="user_email"
            className="focus:outline-none peer text-center bg-zinc-300 text-2xl text-negro border-b border-t-0 border-l-0 border-r-0 border-secundario
            dark:border-blanco dark:bg-negro dark:cursor-blanco dark:caret-primario dark:text-blanco"
          ></input>
           
        </div>
                  
        <div className="flex flex-col items-center">
             <textarea
                rows="4"
                name="message"
                placeholder="Por favor, escriba aquí su mensaje. Ni bien pueda le responderé."
                className=" focus:outline-none  text-center w-8/12 bg-zinc-300 text-xl text-negro border-b border-t-0 border-l-0 border-r-0 border-secundario pt-10
                dark:border-blanco dark:bg-negro dark:cursor-blanco dark:caret-primario dark:text-blanco"
            ></textarea>
        
        <button type="submit" value="Send"  className="mt-5 bg-negro hover:bg-gray-100 hover:text-negro font-semibold py-2 px-4 border border-gray-400 rounded shadow
        dark:bg-bg-gray-100" >Enviar</button>
        
       
        </div>
    </div>  

          </form>
      
    </div>

    </div>
  );
};

export default Contacto;
