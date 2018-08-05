import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { AddMovie } from './AddMovieComponent';
import { Actions } from '../../actions';
import { getIsAddingMovieSelector } from '../../reducers';

const mapStateToProps = state => ({
  isOpen: getIsAddingMovieSelector(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export const AddMovieContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMovie);
