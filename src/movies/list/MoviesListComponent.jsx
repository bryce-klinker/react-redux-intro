import React from 'react';

export const MoviesList = ({ movies }) => (
    <ul>
        {movies.map(m => <li key={m.id} className="movie-item">{m.title}</li>)}
    </ul>
)