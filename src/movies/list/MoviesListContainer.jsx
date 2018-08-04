import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Actions } from '../../actions';
import { getMoviesArraySelector } from '../../reducers';
import { MoviesList } from './MoviesListComponent';

class ContainerComponent extends Component {
    componentDidMount() {
        const { getMovies } = this.props;
        getMovies();
    }

    render() {
        const { movies } = this.props;
        return <MoviesList movies={movies} />
    }
}

const mapStateToProps = (state) => ({
    movies: getMoviesArraySelector(state)
});

const maptDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export const MoviesListContainer = connect(mapStateToProps, maptDispatchToProps)(ContainerComponent);