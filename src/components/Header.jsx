import React, { Component } from 'react';

export class Header extends Component {
  render(){
    return (
        <header>
            <h1>TRAVEL APP</h1>

            <ul>
               <li>
                  <a className='anchor_c' href="">Home</a> 
                   </li> 
                   <li>
                       <a className='anchor_c' href="">About</a>
                   </li>
            </ul>
        </header>
       
    )
    
  }
    
  
}

export default Header