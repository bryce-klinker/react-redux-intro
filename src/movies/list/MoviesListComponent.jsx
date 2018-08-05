import React from 'react';
import { List, ListItem, ListItemText, Button, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const MovieItem = ({ movie }) => (
  <ListItem className="movie-item">
    <ListItemText primary={movie.title} />
  </ListItem>
);

const MovieListComponent = ({ movies, addMovieBegin, classes }) => {
  const onButtonClick = () => addMovieBegin();
  return (
    <div>
      <List>
        {movies.map((m, i) => (
          <MovieItem key={i} movie={m} />
        ))}
      </List>
      <Button id="add-movie" className={classes.addButton} variant="fab" color="primary" onClick={onButtonClick}>
        <AddIcon />
      </Button>
    </div>
  );
};

const styles = theme => ({
  addButton: {
    position: 'absolute',
    bottom: theme.spacing.unit * 3,
    right: theme.spacing.unit * 3,
  },
});

export const MoviesList = withStyles(styles)(MovieListComponent);
