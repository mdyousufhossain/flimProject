import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Actors, Actor, Movie, MovieInformation, Profile, NavBar } from './index';

function App() {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/Movie" element={<MovieInformation />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/actor" element={<Actor />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
