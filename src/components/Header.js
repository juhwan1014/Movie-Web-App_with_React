import React from 'react';
//import Movies from './Movies';
import {FaSearch} from 'react-icons/fa';
import {FaShoppingCart} from 'react-icons/fa';
import SearchArea from './SearchArea'
import MovieList from './MovieList';
import { Router } from 'react-router-dom';

class Header extends React.Component{

  
  constructor(props){
    super(props);
    this.state= { 
        movies: [],
        searchTerm:'',
        isLoaded: false,
    }
  
    this.apiKey = process.env.REACT_APP_API 
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
  
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
        console.log(data);
        this.setState({movies: [...data.results]})
    })
  }
  
  
  handleChange = (e) => {
   this.setState({ searchTerm: e.target.value})
  }
  

    render() {


        return (
          <header>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="logo">
                <a href="index.html" className="brand-wrap">
                  <img
                    src="movie_logo.png"
                    alt="hello wrld store logo"
                    width="100px"
                  />
                  <h1>JH {this.props.name} </h1>
                </a>
              </div>
             
             
              <SearchArea  handleSubmit={this.handleSubmit} handleChange={this.handleChange} />

             {/*
              <div className="search col-md-6 col-sm-12">
                <form action="" onSubmit={this.props.handleSubmit}>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search Movies" onChange={this.props.handleChange}/>
                    <div className="input-group-append">
                      <button className="btn btn-dark" type="submit">
                        <FaSearch/>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
             */}
             
             
             
             
              <div className="widget-wrap col-lg-3 col-md-4">
                <div className="row justify-content-between align-items-center py-3 mx-0">
                  <div className="sign_regi">
                    <a href="temp-signin.html ">Sign in</a> 
                    <a href="temp-register.html">Register</a>
                  </div>
                  <div>
                    <a href="temp-cart.html" className="icon">
                        <FaShoppingCart/>
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
         <MovieList movies={this.state.movies}/>
      
        </header>
        
        );

    }
}

export default Header;
