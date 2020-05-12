import React, { Fragment } from 'react';
import Hero from './Hero';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <div className="box cta">
        <p className="has-text-centered">
           Welcome to our Spotify Application for Assignment 2, Cloud computing!
        </p>
      </div>
    </Fragment>
  )
}
