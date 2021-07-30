import React from 'react';
import {FaSearch} from 'react-icons/fa';
import MovieList from './MovieList';











const SearchArea = (props) => {



  
    return (
        /*<div className ="container">
            <div className = "row">*/


            <div className="search col-md-6 col-sm-12">
                <form action="" onSubmit={props.handleSubmit}>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search Movies" onChange={props.handleChange}/>
                    <div className="input-group-append">
                      <button className="btn btn-dark" type="submit">
                      <FaSearch/>
                      </button>
                    </div>
                  </div>
                </form>


               
              </div>

              

/*
            </div>
        </div>
*/

    )
}

export default SearchArea;
