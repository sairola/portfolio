import "./App.css";
import React, {useEffect, useState} from "react";
import Presentación from "./components/Presentación";
import Tecnologías from "./components/Tecnologías";
import Settings from "./hooks/settings/Settings";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { GiRocketFlight } from "react-icons/gi";

function App() {


const [dark, setDark] = useState(false);

useEffect(() => {
  const  config = JSON.parse(localStorage.getItem("config"));
  setDark(config.theme)
}, []);



const toggleDark = () => {
setDark(!dark)

};

  let urlLinkedIn = 'https://www.linkedin.com/in/franco-brutti-%F0%9F%9A%80-065536b2/';
  let urlGitHub = 'https://github.com/sairola';
  const fecha = new Date();
  const añoActual = fecha.getFullYear();

  return (
<div className={`${dark ? 'dark' : ''}`}>

    <div  className='App dark:bg-negro'>
      <>
        <div>
          <header id="inicio" className="fixed text-center flex top-0 w-full bg-gray-100 shadow-lg items-center justify-between px-8">
            <div className="text-primario text-5xl flex  hover:cursor-pointer hover:scale-110 transition ease-in-out delay-100">
              <a href="#inicio" className="font-black">
                FB
              </a>
              <GiRocketFlight></GiRocketFlight>
            </div>

            <div className=" px-8 gap-8 font-semibold ">
              <a href="#inicio" className="cursor-pointer hover:text-terciario">
                {" "}
                Presentación{" "}
              </a>

              <a
                href="#tecnologías"
                className="cursor-pointer hover:text-terciario"
              >
                {" "}
                Tecnologías{" "}
              </a>
              <a
                href="#proyectos"
                className="cursor-pointer hover:text-terciario"
              >
                {" "}
                Proyectos{" "}
              </a>
              <a
                href="#contacto"
                className="cursor-pointer hover:text-terciario"
              >
                {" "}
                Contacto{" "}
              </a>
            </div>

            <div className="">
              <Settings toggleDark={toggleDark}></Settings>
            </div>
          </header>
        </div>

        <Presentación id="presentacion"></Presentación>

        <Tecnologías id="tecnologías"></Tecnologías>

        <Proyectos id="proyectos"></Proyectos>
      
        <Contacto id="contacto"></Contacto>

        <footer>
          <div className="flex flex-col w-full bg-negro shadow-lg items-center justify-between pt-5 pb-5">
            <div className="w-full">
              <div className="text-blanco flex items-center justify-evenly	 ">
                <a
                  href="#inicio"
                  className="cursor-pointer hover:text-terciario"
                >
                  {" "}
                  Presentación{" "}
                </a>

                <a
                  href="#tecnologías"
                  className="cursor-pointer hover:text-terciario"
                >
                  {" "}
                  Tecnologías{" "}
                </a>
                <a
                  href="#proyectos"
                  className="cursor-pointer hover:text-terciario"
                >
                  {" "}
                  Proyectos{" "}
                </a>
                <a
                  href="#cuarta"
                  className="cursor-pointer hover:text-terciario"
                >
                  {" "}
                  Contacto{" "}
                </a>
              </div>

              <hr className="w-11/12 h-1 mx-auto bg-blanco border-1 rounded md:my-5 dark:bg-blanco"></hr>

              <div className="flex col justify-center  items-center text-blanco m-3 gap-3 text-3xl">
                <BsLinkedin  onClick={() => {window.location.href = urlLinkedIn }}
                className="hover:cursor-pointer hover:scale-110 transition ease-in-out delay-100"></BsLinkedin>
                <BsGithub className="hover:cursor-pointer  hover:scale-110 transition ease-in-out delay-100"></BsGithub>
              </div>

              <div  onClick={() => {window.location.href = urlGitHub }}
              className="text-xl flex text-blanco justify-center">
                <GiRocketFlight></GiRocketFlight>

                <p className="text-blanco ">
                  {`Franco Brutti - ${añoActual} - Make with 💕   `}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>


    </div>
  );

}

export default App;
