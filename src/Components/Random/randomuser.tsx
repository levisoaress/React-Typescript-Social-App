import React, { createElement, useEffect, useState } from "react";
import './Random.css';
import { Link } from "react-router-dom";

export default function Users(){

    let ul = document.createElement('ul');
    ul.setAttribute('id','ul')
    const url = 'https://randomuser.me/api/?results=5';
    
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
    let dados = data.results;
    let length = dados.length;
    console.log(dados);
    
    
    for(let i = 0; i <(length); i++){

        let but = document.createElement('input');
        //let but = `${<Botao Id={'but'} Path={'/reports'}/>}`;
        but.setAttribute('id','but')
        but.setAttribute('type', 'button')
        but.setAttribute('value','New message')

        let div = document.createElement('div');
        
        let img = document.createElement('img');
        img.setAttribute('id','user-foto')

        let small = document.createElement('small');

        let p = document.createElement('p');

        let li = document.createElement('li');
        li.setAttribute('id','user-desc');
        

        li.appendChild(img);
        div.appendChild(p)
        div.appendChild(small)
        div.appendChild(but)
        li.appendChild(div)
        ul.appendChild(li);

        p.innerHTML = `${dados[i].name.first} ${dados[i].name.last} `;
        small.innerHTML = `${dados[i].location.state}, ${dados[i].location.country}`
        img.src = dados[i].picture.large;

        
}

        let a:any = document.querySelector('#sec');
        a.appendChild(ul);
        //document.querySelector('#ul').innerHTML = <Link id="link" to='/reports'></Link>
    })
    
    return(
        <div id="sec">
            
        </div>
    );

}