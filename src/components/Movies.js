import React, { Component } from 'react';
//import Movieitem from './Movie-item';
import MovieCompo from './MovieCompo';
import Select from "react-select";





/*
const Movies = (props) => {


    return(
        <section className="movies-section py-4">
        <div className="container">
            <header className="section-heading">
                <a href="index.html" className="btn btn-lg btn-outline-success mt-3 float-right">See all</a>
                <h1 className="display-4">Popular Movies</h1>
            </header>
            <div className = "row my-4">
            {
                   props.movies.map((movie, i) => {
                    return (
                        <MovieCompo key={i} title = {movie.title} image={movie.poster_path}/>
                    )
                   })
               }
            </div>
        </div>
        </section>

    )
    
}

*/




function createProduct(movie){
    return <MovieCompo
            key = {movie.id}
            id = {movie.id}
            title = {movie.title}
            image = {movie.poster_path}
           // date = {movie.release_date}
            />;
}


 class Movies extends Component {

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
 
     /*
      componentDidUpdate(_, prevState) {
        if (this.state === prevState) {
          return;
        }
    
        this.fetchTop_RatedMovies();
      }
*/

      fetchAllMovies() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`)
          .then((res) => res.json())
          .then((json) => {

     //       const categories = json.map((movie) => {
      //        return movie.original_language;
      //      });
    
            this.setState({
              isLoaded: true,
              movies: json.results,
        //      top_rated: Array.from(new Set(categories)),
              selectedMovies: ""
            });
          });
      }
  
        /*
      fetchTop_RatedMovies() {
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}${this.state.selectedMovies}`;
    
        fetch(url)
          .then((res) => res.json())
          .then((json) => {
            this.setState({
              isLoaded: true,
              movies: json.results
            });
          });
      }
  
      handleSetMovie(selectedMovieOption) {
        this.setState({
          selectedMovies: selectedMovieOption.value
        });
      }
*/
 

/*
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                movies: json.results,
            })
        })
    }
*/


    render() {

      const { isLoaded, movies } = this.state;
      /*
     const options = categories.map((original_language) => {
        return {
          value: original_language,
          label: original_language
        };
      });
       */




     



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
                    <h1 className="display-4">Popular Movies</h1>
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

export default Movies;