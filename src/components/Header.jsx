import React from 'react'
import {BsToggleOn} from 'react-icons/bs'
import { BsToggle2Off } from 'react-icons/bs'
import {GiRocketFlight} from 'react-icons/gi'
import Settings from '../hooks/settings/Settings'

const Header = () => {

     return (
    <div className=''>
       <header className="md:flex w-full bg-gray-100 shadow-lg items-center justify-between px-8">
          <div className='text-primario text-5xl flex  hover:cursor-pointer hover:scale-110 transition ease-in-out delay-100'>  
              <p className='font-black'>FB</p>
              <GiRocketFlight></GiRocketFlight>
          </div>

          <div className="flex col justify-between px-8 gap-8 font-semibold ">

            <a href="#tecnologías" className="cursor-pointer hover:text-terciario"> Presentación </a>
            <a className="cursor-pointer hover:text-terciario"> Tecnologías </a>
            <a className="cursor-pointer hover:text-terciario"> Proyectos </a>
            <a className="cursor-pointer hover:text-terciario"> Contacto </a>
          

          </div>
          
          <div className=''>
                 <Settings></Settings>
                   </div>
        </header>
    </div>
  )
}

export default Header
