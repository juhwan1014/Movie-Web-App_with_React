import { Component } from 'react';
import '../App.css';
import Banner from './Banner';
import Header from './Header';
import Movies from './Movies';
import Nav from './Nav';
import SearchArea from './SearchArea';
import MovieList from './MovieList';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieDetail from './MovieDetail'
import Top_RatedMovies from './Top_RatedMovies';
import Now_Playing from './Now_Playing';
import Upcoming from './Upcoming';





class App extends Component {


  
  
  /*
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
  
*/

  render(){
  return (
    <div className="App">
      <Router>
     <Header name = "Movie App" />
  {/* <SearchArea  handleSubmit={this.handleSubmit} handleChange={this.handleChange} />  */}
      <Nav />
      <Route exact path="/">
     <Banner />
     
     <Movies />
    
    {/*<MovieList movies={this.state.movies}/>*/} 
    </Route>
    
    <Route path="/top-rated" component={Top_RatedMovies} />
    <Route path="/now-playing" component={Now_Playing} />
    <Route path="/upcoming" component={Upcoming} />
    <Route path="/movies/:id" component={MovieDetail} />

    </Router>
    </div>
  );
}
}

export default App;
