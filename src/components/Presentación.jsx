import React from "react";
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const Presentación = () => {
let urlLinkedIn = 'https://www.linkedin.com/in/franco-brutti-%F0%9F%9A%80-065536b2/';
let urlGitHub = 'https://github.com/sairola';
let urlCV = 'https://drive.google.com/file/d/1EmwI0T9yNs5AQ1hcx_9nZrN2sam3fkO_/view?usp=share_link'

const handleClick = () => {
  window.open("https://drive.google.com/file/d/1EmwI0T9yNs5AQ1hcx_9nZrN2sam3fkO_/view?usp=share_link", "_blank")
};


  return (
<>
<div className="  sm:flex items-center justify-around pt-12 m-20">

      <div className="px-6 py-4 text-left">
        <h1 className=" text-3xl font-extrabold dark:text-blanco">Hola...</h1>
        <span className="text-5xl font-black dark:text-blanco">soy Franco Brutti
        </span>
        <h2 className="text-4xl dark:text-blanco">FrontEnd developer</h2>
        <div className="flex col text-primario m-3 gap-3 text-4xl">
        <BsLinkedin onClick={() => {window.location.href = urlLinkedIn }}
           className="hover:cursor-pointer hover:scale-110 transition ease-in-out delay-100"></BsLinkedin>
        <BsGithub onClick={() => {window.location.href = urlGitHub }} 
        className="hover:cursor-pointer  hover:scale-110 transition ease-in-out delay-100"></BsGithub>
        </div>
      </div>


      <div className="max-w-md rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <p className="text-gray-700 font-mono dark:text-blanco">
                Nací con una 🖥️ debajo del brazo y los caminos de la vida nos fueron separando😖, pero todo vuelve💪🏼. Siempre cerca del mundo de la comunicación (gráfica y audiovisual) y desde hace unos años como recruiter IT👷🏻 donde fui conociendo diferentes tecnologías. 
                Desde ahí empecé a interesarme más y a hacer pequeños cursos de marketing, redes, UX/UI hasta que decidí pegar el salto🥰👨🏽‍💻. 
                Me considero super responsable, un trabajador de equipo y lo que más me gusta en esta vida es aprender🤓
          </p>
        </div>
              <div className="px-6 pt-4 pb-2">
          <button onClick={handleClick}  className="mr-5 bg-zinc-300 py-1 px-3 rounded-full hover:bg-zinc-400 transition">
            Descargar mi CV
          </button>
          
        </div>
      </div>
 
      </div>
    

      </>
  );
};

export default Presentación;
