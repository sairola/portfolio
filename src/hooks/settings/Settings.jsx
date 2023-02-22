import React from 'react'
import useLocalStorage from '../useLocalStorage'
import { BsToggle2Off, BsToggleOn } from 'react-icons/bs'



const defaultConfig = {
    
    theme: 'ligth',
    lan: 'es'
};

function Settings({ toggleDark })  {
 
    const [config, setConfig] = useLocalStorage('config', defaultConfig);

    const toggleMode = (event) => {
        event.preventDefault()

setConfig((oldConfig) =>  (
    
    {
            ...oldConfig,
            theme: oldConfig.theme === "ligth" ? "dark" : "ligth"

}))

toggleDark()

    }

 return (
    <div className='flex m-2 items-center'>
        <div>
            <h1>Actual Config: {config.theme} </h1>
        </div>
        
        <span className='text-3xl text-primario'>
        {config.theme === "dark" ? <BsToggleOn onClick={toggleMode}></BsToggleOn>
            : <BsToggle2Off onClick={toggleMode}></BsToggle2Off>
        } 
        </span>
    </div>
  )
}

export default Settings
