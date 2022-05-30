import React, { useState, useEffect } from 'react';
import './User.css';
//import Search from '../Search/Search';
import lupa from './lupa.png';
import voltar from './return.png';
interface UserProps{
    Name: any,
    Avatar: any, 
    Bio: any, 
    Local: any,  

}

export default function User(props: any, {Name, Avatar, Bio, Local}: UserProps){

const [find, setFind] = useState();
const [name, setName] = useState();
const [user, setUser] = useState({ name: '', avatar: '', bio: '', local: '', following: '',followers: '', company: ''});
const tempo = {time: new Date().toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'})};
const usuario:any = 'levisoaress';
let valor:any = name;

let url = '';

if(!find){
    url = `https://api.github.com/users/levisoaress`;
}

else{
    url = `https://api.github.com/users/${find}`;
}

function Play(){
    if(name){
    setFind(name)
    }
    else{setFind(usuario)}
}

async function Voltar(){
    setFind(usuario);
    valor = '';
    setName(valor);
    
}

useEffect(() => {
        fetch(url).
        then((response) => response.json()).
        then((data) => {
            setUser({
            name: data.name,
            avatar: data.avatar_url,
            bio: data.bio,
            local: data.location,
            following: data.following,
            followers: data.followers,
            company: data.company
            });
        });
    }, [find,name])

    return(
        <div>
        
            <div className='Search-bar'>
                <div className='Search-bar-button'>
                    <input id='usersearch' type='text' value={valor} placeholder='Search' onChange={(e:any) => setName(e.target.value)}/>
                    <button id='lupa' onClick={Play}><img src={lupa}/></button>
                    <button id='back' onClick={Voltar}><img src={voltar}/></button>
                </div>
            </div>
            
            <div className='perfil'>
                <div className='perfil-box'>
                    <div className='perfil-box-content'>
                        <img id='foto' src={user.avatar} alt='avatar'/>
                    </div>
                    <div className='perfil-box-content-but'>
                        <button><a href=''>Follow</a></button>
                    </div>
                </div>

                <div className='description'>
                    <div className='user-about'>
                        <div className='bio'>
                            <h3>{user.name}</h3>
                            {/*<h5>Front-end Developer | HTML | CSS | JavaScript | React JS</h5>*/}
                            <small>{user.bio}</small>
                            {/*<small>{user.company}</small>*/}
                        </div>

                        <div className='topic'>
                            <div className='followers'>
                            <h4>Following</h4>
                            <h4>Followers</h4>
                            </div>

                            <ul className='numbers'>
                                <li>
                                    <h5>{user.following}</h5>
                                </li>
                                <li>
                                    <h5>{user.followers}</h5>
                                </li>
                            </ul>
                        </div>

                        <div className='topic'>
                            <div className='contato'>
                                <button>Contact</button>
                            </div>
                        </div>

                    </div>

                    <div className='horario'>
                        <small>{user.local}</small>
                        <small>{tempo.time}</small>
                    </div>
                </div>
            </div>
        </div>
    )

}