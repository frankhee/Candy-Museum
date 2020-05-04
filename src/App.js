import React from 'react';
import './App.css';
import {Helmet} from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #f5d9f5; }'}</style>
      </Helmet>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="#">CANDY</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">ABOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">TICKET</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;
