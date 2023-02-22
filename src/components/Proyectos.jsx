import React from 'react'
import ejemplo from '../assets/images/ejemplo.png'
import Arkanoid from '../assets/images/Arkanoid.png'
import fireShopping from '../assets/images/fireShopping.png'
import desarrollarte from '../assets/images/desarrollarte.png'


const Proyectos = () => {
  return (
    <div id="proyectos" className='m-5 p-5'>

    <h1 className='text-5xl dark:text-blanco'>Los proyectos en los que estuve trabajando</h1>

<div className='md:flex p-5 gap-5 shadow'>
<div className="max-w-sm bg-white border border-zinc-300 rounded-lg shadow ">
    <a href="#">
        <img className="rounded-t-lg" src={Arkanoid} alt="Arkanoid-Chapuza" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-blanco">Arkanoid Chapuza</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 dark:text-blanco">Juego desarrollado con Phaser3, JavaScript, Html y CSS. En su versión actual (v.1.0.1), cuenta con tres escenas y un nivel.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primario bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Repositorio en GIT
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>

<div className="max-w-sm bg-white border  border-zinc-300 rounded-lg shadow">
    <a href="#">
        <img className="rounded-t-lg" src={fireShopping} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white dark:text-blanco">FireShopping tienda online</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 dark:text-blanco">App realizada con React Js. Autenticación de users con Firebase, Notificaciones Push, BD no relacional con Firestore, hosting Firebase. Gestión de usuarios, tareas y conexión con Base de datos.

</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primario bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Repositorio en GIT
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>

<div className="max-w-sm bg-white border  border-zinc-300 rounded-lg shadow">
    <a href="#">
        <img className="rounded-t-lg" src={desarrollarte} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white dark:text-blanco">Desarrollarte RH</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">Wordpress responsive. Sobre plantilla, modificación del HTML, de la hoja de estilos y gestión de eventos y funcions con JS. Formularios de contactos, y recepción de curriculums vía mail. </p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primario bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Repositorio en GIT
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>

</div>

    </div>
  )
}

export default Proyectos
