import React from 'react';
import { Link } from "react-router-dom"

const MovieCompo =(props) =>{
    return(







/*

        <div className="col s12 m6 13">
            <div className ="card">
                 <div className="card-image waves-effect waves-block waves-light">
                        {
                            props.image==null ? <img src ={`http://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="card image" style ={{width: "100%", height:360 }}/> :  <img src ={`https://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style ={{width: "100%", height:360 }} 
                            />
                        }
                     
                    
                 </div>
            </div>
        </div>

*/



<div className = "col-lg-3 col-md-6">
<div className="card card-product-grid">
    {/*<a href="index.html" className="img-wrap">*/} 
    <img src={ `https://image.tmdb.org/t/p/w185${props.image}`} className="card-img-top image " alt="movie"/> 
   

    <Link key={props.id} to={"/movies/" + props.id}>
                <button type="button" className="btn btn-dark py-2 btn-block">See Details</button>
                </Link>


    <div className="card-body border-top text-center">
    <div className="card-text">
        <a href="index.html" className="card-link title"><h5 Name="card-title text-muted">{ props.title }</h5></a>
    {/*<div className="price mt-1">${this.props.price }</div>*/}
    {/*"http://image.tmdb.org/t/p/w500/{this.props.poster_path}"*/}
    </div>
</div>
</div>
</div>
















    )
}


export default MovieCompo;