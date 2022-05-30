import React, { Component } from 'react';
import './Home.css'
import User from '../../Components/User/User';
import Card from '../../Components/Card/Card';
import Post from '../../Components/Posts/Post';
import post from './post.jpg';
import post1 from './post1.jpg';
import post2 from './post2.jpg';
import post3 from './post3.jpg';
import pessoa from './pessoa.jpg';
import pessoa1 from './pessoa1.jpg';
import pessoa2 from './pessoa2.jpg';
import pessoa3 from './pessoa3.jpg';
import Search from '../../Components/Search/Search';
//import pessoa4 from './pessoa4.jpg'

export default function Home() {
  //const dado = document.getElementsByName('User')
  return (
    <>
      <div className="home">
        {/*<Search User={Name}/>*/}
        <div className='user'>
          <User Name={'levisoaress'}/>
        </div>
    
        <div className='container'>

          <div className='container-son'>
            <div className='Pessoas-title'>
              <h1>People you may know</h1>
            </div>
            <Card/>
          </div>

        </div>

        <div className='timeLine'>
          <Post Image={post} Person={pessoa} Name={'Natasha R.'} Description={'Such a beatiful place. Today, this city surprised me on my birthday and I am grateful to live here.'}/>
          <Post Image={post1} Person={pessoa1} Name={'Peter Meyer'} Description={'Vacation ON 🔥🔥'}/>
          <Post Image={post2} Person={pessoa2} Name={'S. Kolshova'} Description={'My peace'}/>
          <Post Image={post3} Person={pessoa3} Name={'Sylvia & Jake'} Description={'Such a beautiful girl'}/>
        </div>
        
      </div>
    </>
    )

}