import React from 'react';
import { connect } from 'react-redux'
import { removeFavorite } from '../actions/favoritesActions'

import { Link } from 'react-router-dom';


const FavoriteMovieList = (props) => {
    console.log(props)
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onClick={() => props.removeFavorite(movie.id)}><span class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    state = state.favoritesReducer
    return{
        favorites: state.favorites
    }
}

export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);