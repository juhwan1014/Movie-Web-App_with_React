import React, { Component } from 'react';
import MovieCompo from './MovieCompo';

function createProduct(movie){
    return <MovieCompo
            key = {movie.id}
            id = {movie.id}
            title = {movie.title}
            image = {movie.poster_path}
           // date = {movie.release_date}
            />;
}



class Top_RatedMovies extends Component {

    constructor(props){
        super(props);
        this.state= { 
            movies: [],
            top_rated:[],
            selectedMovies: "",
            searchTerm:'',
            isLoaded: false
            
        }

        this.apiKey = process.env.REACT_APP_API 
    }



    componentDidMount() {
        this.fetchAllMovies();
      }


      fetchAllMovies() {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}${this.state.selectedMovies}`)
          .then((res) => res.json())
          .then((json) => {

    
            this.setState({
              isLoaded: true,
              movies: json.results,
      
              selectedMovies: ""
            });
          });
      }


      render() {

        const { isLoaded, movies } = this.state;
  
  
  
          if(!isLoaded){
              return <div>Loading...</div>
          }
          else{
  
          
          return (
              
              <section className="movies-section py-4">
                  
              <div className="container">
                  <header className="section-heading">
             {/*    <Select
                options={options}
                  onChange={this.handleSetMovie.bind(this)}
             />  */} 
                      <h1 className="display-4">Top Rated Movies</h1>
                  </header>
                  <div className = "row my-4">
                   {movies.map(createProduct)}
                  </div>
              </div>
              </section>
          );
      }
  }
  }
  
  export default Top_RatedMovies;