import React from 'react'
import {SiJavascript, SiFirebase, SiMaterialui, SiRedux,
    SiTailwindcss, SiBootstrap, SiTypescript, SiAdobeillustrator, SiAdobephotoshop} from 'react-icons/si'
import {FaReact, FaSass,FaCss3Alt, FaNodeJs, FaWordpress} from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'
import {DiGit} from 'react-icons/di'

const Tecnologías = () => {
  return (
    <div className='mt-10 dark:text-blanco'>
      <h2 id='tecnologías' className='text-4xl m-10 pt-6 pb-6'>Las tecnologías conozco</h2>
      
      <div className='dark:text-blanco m-10  grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 items-center justify-around text-4xl text-secundario' >
      
       <div className='grid justify-items-center'>
              <SiJavascript className='hover:cursor-pointer hover:scale-110 transition ease-in-out delay-100'></SiJavascript>
              <h3 className='text-xl text-secundario dark:text-blanco'>JavaScript</h3>
       </div>

       <div className='grid justify-items-center'>
              <SiTypescript className='hover:cursor-pointer hover:scale-110 transition ease-in-out delay-100'></SiTypescript>
              <h3 className='text-xl text-secundario dark:text-blanco'>TypeScript</h3>
       </div>

       
       <div className='grid justify-items-center'>
              <FaReact className='hover:cursor-pointer hover:scale-110 transition ease-in-out delay-100'></FaReact>
              <h3 className='text-xl text-secundario dark:text-blanco'>React JS</h3>
       </div>
       
       <div className='grid justify-items-center'>
              <AiFillHtml5 className='hover:cursor-pointer hover:scale-110 transition ease-in-out delay-100'></AiFillHtml5>
              <h3 className='text-xl text-secundario dark:text-blanco'>HTML</h3>
       </div>
              
       <div className='grid justify-items-center'>
              <FaCss3Alt className='hover:cursor-pointer hover:scale-110 transition ease-in-out delay-100'></FaCss3Alt>
              <h3 className='text-xl text-secundario dark:text-blanco'>CSS</h3>
       </div>
       
       <div className='grid justify-items-center'>
              <FaSass className='hover:cursor-pointer hover:scale-110 transition ease-in-out delay-100'></FaSass>
              <h3 className='text-xl text-secundario dark:text-blanco'>SASS</h3>
       </div>

       <div className='grid justify-items-center'>
              <FaNodeJs className='hover:cursor-pointer hover:scale-110 transition ease-in-out delay-100'></FaNodeJs>
              <h3 className='text-xl text-secundario dark:text-blanco'>NODE Js</h3>
       </div>

       <div className='grid justify-items-center'>
              <SiFirebase className='hover:cursor-pointer hover:scale-110 transition ease-in-out delay-100'></SiFirebase>
              <h3 className='text-xl text-secundario dark:text-blanco'>FireBase</h3>
       </div>

       <div className='grid justify-items-center'>
              <SiRedux className='hover:cursor-pointer hover:scale-110 transition ease-in-out delay-100'></SiRedux>
              <h3 className='text-xl text-secundario dark:text-blanco'>Redux</h3>
       </div>

       <div className='grid justify-items-center'>
              <DiGit className='hover:cursor-pointer hover:scale-110 transition ease-in-out delay-100'></DiGit>
              <h3 className='text-xl text-secundario dark:text-blanco'>GIT</h3>
       </div>

       <div className='grid justify-items-center'>
              <SiMaterialui className='hover:cursor-pointer hover:scale-110 transition ease-in-out delay-100'></SiMaterialui>
              <h3 className='text-xl text-secundario dark:text-blanco'>Material UI</h3>
       </div>

       <div className='grid justify-items-center'>
              <SiTailwindcss className='hover:cursor-pointer hover:scale-110 transition ease-in-out delay-100'></SiTailwindcss>
              <h3 className='text-xl text-secundario dark:text-blanco'>TailWind</h3>
       </div>


       <div className='grid justify-items-center'>
              <SiBootstrap className='hover:cursor-pointer hover:scale-110 transition ease-in-out delay-100'></SiBootstrap>
              <h3 className='text-xl text-secundario dark:text-blanco'>BootStrap</h3>
       </div>

       <div className='grid justify-items-center'>
              <FaWordpress className='hover:cursor-pointer hover:scale-110 transition ease-in-out delay-100'></FaWordpress>
              <h3 className='text-xl text-secundario dark:text-blanco'>Wordpress</h3>
       </div>

       <div className='grid justify-items-center'>
              <SiAdobeillustrator className='hover:cursor-pointer hover:scale-110 transition ease-in-out delay-100'></SiAdobeillustrator>
              <h3 className='text-xl text-secundario dark:text-blanco'>Illustrator</h3>
       </div>

       <div className='grid justify-items-center'>
              <SiAdobephotoshop className='hover:cursor-pointer hover:scale-110 transition ease-in-out delay-100'></SiAdobephotoshop>
              <h3 className='text-xl text-secundario dark:text-blanco'>Photoshop</h3>
       </div>


       </div>
    </div>
  )
}

export default Tecnologías
