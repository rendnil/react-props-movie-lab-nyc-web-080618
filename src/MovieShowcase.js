import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    return movieData.map((data)=>{
      return <MovieCard
        poster = {data.poster}
        title = {data.title}
        genres = {data.genres}
        IMDBRating = {data.IMDBRating}
      />

      //return render(card)
    })

  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
