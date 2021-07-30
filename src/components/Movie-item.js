import React, { Component } from 'react'

export default class Movieitem extends Component {
    render() {

       
        return (
            <div className = "col-lg-3 col-md-6">
                <div className="card card-product-grid">
                    <a href="index.html" className="img-wrap"> 
                    <img src={ `https://image.tmdb.org/t/p/w185${this.props.image}`} className="card-img-top image " alt="movie"/> 
                    </a>

                    <button type="button" className="btn btn-dark py-2 btn-block">See Movie</button>

                    <div className="card-body border-top text-center">
                    <div className="card-text">
                        <a href="index.html" className="card-link title"><h5 Name="card-title text-muted">{ this.props.title }</h5></a>
                    {/*<div className="price mt-1">${this.props.price }</div>*/}
                    {/*"http://image.tmdb.org/t/p/w500/{this.props.poster_path}"*/}
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
