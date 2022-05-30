import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <IconContext.Provider value={{color: 'black'}}>
          <div className='navbar'>{/*Barra horizontal no topo da página*/}
              <Link to="#" className='menu-bars'>{/*Bloco, da barra horizontal, em que fica o botão de abrir o Menu*/}
                  <FaIcons.FaBars onClick={showSidebar}/>
              </Link>
          </div>
          
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            
            <ul className='nav-menu-items' onClick={showSidebar}>
              
              <li className='navbar-toggle'>{/*Bloco, da barra vertical, em que fica o botão X de fechar o Menu*/}
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose/>
                </Link>
              </li>

              {SidebarData.map((item, index) => {{/*Cria novas Tags li de acordo com os elementos da variável SidebarData*/}
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
 
            </ul>
          </nav>
        </IconContext.Provider>
    </>
  )
}


/*
Comentários Relevantes: 

#CASO 1: const [sidebar, setSidebar] = useState(false)

Definição de um useState, onde *sidebar* é a variável que receberá as alterações e *setSidebar* é a função que alterará  os valores de *sidebar*
Ele foi definido, inicialmente, como *false*. Assim, como você verá no Caso 2, será retornada uma Tag nav com ClassName='nav-menu', 
e quando sidebar = true, será retornada uma Tag nav com className='nav-menu active'
===================================================================================================================================================================

#CASO 2: const showSidebar = () => setSidebar(!sidebar)

Constante que recebe a *arrow function* que chama a função *setSidebar*, definida no useState, que tem o poder de alterar o valor da variável *sidebar* para 'true'
*!sidebar* indica que a função vai alterar o valor da variável *sidebar* para o contrário do seu valor inicial. Basicamente, *!* significa 'não' ou 'contrário'
===================================================================================================================================================================

#CASO 3: <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>...</nav>

Se sidebar = true (?), será retornado um ClassName = 'nav-menu active'...Se sidebar = false (:), será retornado um ClassName = 'nav-menu'
===================================================================================================================================================================

#CASO 4: {SidebarData.map((item, index) => return(...)}

SidebarData.map(...) verifica todos os items (objetos) e seus indexadores (posição de cada objeto dentro do array) 
dentro da constante SidebarData (Array de objetos) que está no arquivo SidebarData.js
===================================================================================================================================================================

#CASO 5: <li key={index} className={item.cName}>...</li>

Retorna Tags <li> para cada um dos items (objetos) do array SidebarData (Caso 3), de forma que, cada li terá como key
(questão de organização do DOM) seus indexadores (posição de cada objeto dentro do array) e como className o
elemento cName de cada objeto.
===================================================================================================================================================================










*/

