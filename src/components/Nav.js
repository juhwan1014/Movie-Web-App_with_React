import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-dark sticky-top"> 
             
          <button class="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto justify-content-center">
        
              <li class="nav-item text-center">
                <NavLink to="/" exact className="btn btn-outline-light border border-dark rounded mx-2 w-150" >Home</NavLink>
              </li>
              
              <li class="nav-item text-center">
                  <NavLink to="/top-rated" className="btn btn-outline-light border border-dark rounded mx-2 w-150" >Top Rated</NavLink>
                </li>
                
                <li class="nav-item text-center">
                  <NavLink to="/now-playing" className="btn btn-outline-light border border-dark rounded mx-2 w-150" >Now Playing</NavLink>
                </li>
                
                <li class="nav-item text-center">
                  <NavLink to="/upcoming" className="btn btn-outline-light border border-dark rounded mx-2 w-150" >Upcoming</NavLink>
                
                </li>
        
              
            </ul>
          </div>
         </nav>
            </div>
        
        
        
        
        
        )
    }
}
