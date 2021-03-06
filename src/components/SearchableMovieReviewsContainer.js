// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    };
  }

  componentWillMount() {
    fetch(URL+this.state.searchTerm)
      .then(response => response.json())
      .then((response => this.setState({reviews: response.results})))
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.reviews !== this.state.reviews
  // }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
export default SearchableMovieReviewsContainer;
