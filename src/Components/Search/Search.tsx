import React, { useState, useEffect } from 'react';
import './Search.css';
import lupa from './lupa.png';

interface SearchProps{
    User: any,
}

export default function Search(props: any, {User}: SearchProps){
    const [name, setName] = useState();
    const user = props.User

    return(
        <div className='Search-bar'>
            <div className=''>
            <button><input type='text' placeholder='Pesquisar' onChange={(e:any) => setName(e.target.value)}/> <img src={lupa}/></button>
            <h1>{name}</h1>
            </div>
        </div>
    )
}