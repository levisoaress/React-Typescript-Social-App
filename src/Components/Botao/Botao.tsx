import React from 'react';
import {Link} from 'react-router-dom';

interface BotaoProps{
    Path: string,
    Id: string,
    Play: Function
}
export default function Botao(props:any,{Path,Id,Play}:BotaoProps):{}{
    const id = props.Id;
    const way = String(props.Path);
    return(
        <Link to={way}>
            <input type='button' id={id}>New message</input>
        </Link>
    )
}