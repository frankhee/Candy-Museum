import React from 'react';
import './App.css';
import {Helmet} from 'react-helmet';
import hand from './images/hand2.png';
import milk from './images/milk.png';
import lolliLogo from './images/lolli_icon.png';
import gumball from './images/gumball.png';
import sprinkles from './images/sprinkles.png';

export default function App() {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #f5d9f5; }'}</style>
      </Helmet>
      <div>
        <nav id = "mainNavbar" class="navbar bg-dark navbar-expand-md navbar-dark py-0 fixed-top">
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
        <section className = "container-fluid generalFont px-0">
          <div className = "row align-items-center">
            <div className = "col-lg-6">
              <div id = "headingGroup" className = "text-white text-center d-none d-lg-block mt-5">
                <h1>MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
                <h1>MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
                <h1>MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
                <h1>MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
                <h1>MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
                <h1>MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
                <h1>MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
              </div>
            </div>
            <div className = "col-lg-6 px-0">
              <img className = "img-fluid" src = {hand}/>
            </div>
          </div> 
        </section>

        <section className = "container-fluid generalFont px-0">
          <div className = "row align-items-center content">
            <div className = "col-md-6 order-2 order-md-1">
              <img className = "img-fluid" src = {milk}/>
            </div>
            <div className = "col-md-6 order-1 order-md-2 text-center">
              <div className = "row justify-content-center">
                <div className = "col-10 col-lg-8 sectionOne mb-5 mb-md-0">
                  <h2>MUSEUM OF CANDY</h2>
                  <img src = {lolliLogo} className = "d-none d-lg-inline"/>
                  <p>Vivamus pretium ut felis quis venenatis. Vivamus tristique erat ut mi volutpat molestie. Pellentesque non posuere est, ac ullamcorper elit. In scelerisque mi eu rutrum faucibus. Suspendisse vestibulum non dui nec posuere. Ut eu massa metus. Maecenas placerat risus orci, ac mattis nulla ultrices non.</p>
                </div>
              </div>
            </div>
          </div>  
          <div className = "row align-items-center content">
            <div className = "col-md-6 text-center">
              <div className = "row justify-content-center">
                <div className = "col-10 col-lg-8 sectionOne mb-5 mb-md-0">
                  <h2>MUSEUM OF CANDY</h2>
                  <img src = {lolliLogo} className = "d-none d-lg-inline"/>
                  <p>Vivamus pretium ut felis quis venenatis. Vivamus tristique erat ut mi volutpat molestie. Pellentesque non posuere est, ac ullamcorper elit. In scelerisque mi eu rutrum faucibus. Suspendisse vestibulum non dui nec posuere. Ut eu massa metus. Maecenas placerat risus orci, ac mattis nulla ultrices non.</p>
                </div>
              </div>
            </div>
            <div className = "col-md-6">
              <img className = "img-fluid" src = {gumball}/>
            </div>
          </div>
          <div className = "row align-items-center content">
            <div className = "col-md-6 order-2 order-md-1">
              <img className = "img-fluid" src = {sprinkles}/>
            </div>
            <div className = "col-md-6 order-1 order-md-2 text-center">
              <div className = "row justify-content-center">
                <div className = "col-10 col-lg-8 sectionOne mb-5 mb-md-0">
                  <h2>MUSEUM OF CANDY</h2>
                  <img src = {lolliLogo} className = "d-none d-lg-inline"/>
                  <p>Vivamus pretium ut felis quis venenatis. Vivamus tristique erat ut mi volutpat molestie. Pellentesque non posuere est, ac ullamcorper elit. In scelerisque mi eu rutrum faucibus. Suspendisse vestibulum non dui nec posuere. Ut eu massa metus. Maecenas placerat risus orci, ac mattis nulla ultrices non.</p>
                </div>
              </div>
            </div>
          </div>  
        </section>
      </div>
    </div>
  );
}