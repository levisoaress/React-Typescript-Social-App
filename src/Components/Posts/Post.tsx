import './Post.css'
import React from 'react';

import Pessoa from './pessoa.jpg'
import Users from '../Random/randomuser.js';

interface PostProps{
    Image: string, 
    Person: string,
    Name: string,
    Description: string,
  }
export default function Post(props:any,{Image, Person, Name, Description}:PostProps){
    let imagem = props.Image;
    let pessoa = props.Person;
    let nome = props.Name;
    let descricao = props.Description;
    return(
            <div className='posts'>
                <div className='center'>

                    <div className='poster'>
                        <div className='poster-pos'>
                            <img src={pessoa}/>
                            <h2>{nome}</h2>
                        </div>
                    </div>

                    <div className='photo'>
                        <img src={imagem}/>
                    </div>

                    <div className='photo-description'>
                        <p>{descricao}</p>
                    </div>

                </div>

            </div>
    )
}