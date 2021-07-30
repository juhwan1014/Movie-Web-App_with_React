import React, { Component } from "react";
import { Link } from "react-router-dom";

class MovieDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      title: "",
      popularity: 0.0,
      overview: "",
      original_language: "",
      image: ""
    };

    this.apiKey = process.env.REACT_APP_API 
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct() {
    const id = this.props.match.params.id;

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}/${id}`)
      .then((res) => res.json())
      .then((movie) => {
     
        this.setState({
          id: movie.id,
          title: movie.title,
          popularity: movie.popularity,
          overview: movie.overview,
          original_language: movie.original_language,
          image: movie.poster_path
        });
      });
  }

  render() {
    const { title, popularity, overview, image } = this.state;

    return (

        <div class="card detail-card my-4">
          <div class="row no-gutters">
            <div className="col-md-4 text-center my-3"><img src={`https://image.tmdb.org/t/p/w185/gnf4Cb2rms69QbCnGFJyqwBWsxv.jpg`} class="card-img" alt="movie" /></div> 
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{overview}</p>
                <p class="card-text">{popularity}</p>
            </div>
            </div>    
          </div>
          <Link to="/"><button className="btn btn-dark btn-block">Back to Products Page</button></Link>
        </div>
    );
  }
}

export default MovieDetail;