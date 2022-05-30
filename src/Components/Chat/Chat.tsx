import React, {useState} from 'react'
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {IconContext} from 'react-icons'
import './Chat.css'
import Users from '../Random/randomuser';

export default function Chat() {

  const [chatbar, setChatbar] = useState(false)

  const showChatbar = () => setChatbar(!chatbar)

  return (

    <IconContext.Provider value={{color: 'black'}}>
        <div className='chatbar'>{/*Barra horizontal no topo da página*/}
          <Link to="#" className='chat-bars'>{/*Bloco, da barra horizontal, em que fica o botão de abrir o Menu*/}
            <IoIcons.IoMdPerson onClick={showChatbar}/>
          </Link>
        </div>
    
        <nav className={chatbar ?  'chat-menu active' :  'chat-menu'}>
      
          <ul className= 'chat-menu-items' onClick={showChatbar}>
              
            <li className='chatbar-toggle'>{/*Bloco, da barra vertical, em que fica o botão X de fechar o Menu*/}
              <Link to='#' className='chat-bars'>
                <AiIcons.AiOutlineClose/>
              </Link>
            </li>
            
            <div id='h3'>
              <h3>Messages</h3>
            </div>

            <li id='pessoas'>
                <Users/>
            </li>
            
          </ul>

      
        
      
        </nav>
    </IconContext.Provider>
  )
}

        

