import './Card.css';
import React from 'react';
import Pessoa from './pessoa.jpg'
import Pessoa1 from './pessoa1.jpg'
import Pessoa2 from './pessoa2.jpg'
import Pessoa3 from './pessoa3.jpg'
import Pessoa4 from './pessoa4.jpg'
export default function Card(){


    return(
        <div className="Stats">

            <div className='cards'>
                <img src={Pessoa}/>
                <div>
                    <h3>Natasha R.</h3>
                    <button>Follow</button>
                </div>
            </div>

            <div className='cards'>
                <img src={Pessoa1}/>
                <div>
                    <h3>Peter Meyer</h3>
                    <button>Follow</button>
                </div>
            </div>

            <div className='cards'>
                <img src={Pessoa2}/>
                <div>
                    <h3>S. Kolshova</h3>
                    <button>Follow</button>
                </div>
            </div>

            <div className='cards'>
                <img src={Pessoa3}/>
                <div>
                    <h3>Sylvia & Jake</h3>
                    <button>Follow</button>
                </div>
            </div>

            </div>

    )
}
