import React, { Component } from 'react';
import { Dialog, DialogContent, DialogActions, Button, TextField } from '@material-ui/core';

export class AddMovie extends Component {
  state = {};

  render() {
    const { isOpen } = this.props;
    const { title = '' } = this.state;
    return (
      <Dialog open={isOpen}>
        <DialogContent>
          <form onSubmit={this.onConfirmed}>
            <TextField autoFocus value={title} id="title" label="Title" onChange={this.onFieldChanged('title')} />
          </form>
        </DialogContent>
        <DialogActions>
          <Button className="cancel-button" onClick={this.onCancelled}>
            Cancel
          </Button>
          <Button className="confirm-button" onClick={this.onConfirmed}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  onCancelled = () => {
    const { addMovieCancelled } = this.props;
    addMovieCancelled();
  };

  onConfirmed = evt => {
    if (evt) evt.preventDefault();

    const { addMovieConfirmed } = this.props;
    addMovieConfirmed(this.state);
  };

  onFieldChanged = fieldName => {
    return ({ currentTarget }) => {
      this.setState({ [fieldName]: currentTarget.value });
    };
  };
}
