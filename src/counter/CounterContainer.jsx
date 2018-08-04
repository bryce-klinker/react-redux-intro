import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Actions } from '../actions';
import { getCurrentCountSelector } from '../reducers';
import { Counter } from './CounterComponent';

const mapStateToProps = (state) => ({
    current: getCurrentCountSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
