import './css/App.css';
import logo from '../src/img/omnifood-logo.png';
import c1 from "../src/img/customers/customer-1.jpg";
import c2 from "../src/img/customers/customer-2.jpg";
import c3 from "../src/img/customers/customer-3.jpg";
import c4 from "../src/img/customers/customer-4.jpg";
import c5 from "../src/img/customers/customer-5.jpg";
import c6 from "../src/img/customers/customer-6.jpg";
import React, { useState } from "react";


function App() {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <div>
      <header class="header">
        <img class="logo" alt="logo" src={logo} />
        <nav class="main-nav">
          <ul class="main-nav-list">
            <li><a href="#" class="main-nav-link">Sign in</a></li>
            <li><a href="#" class="main-nav-link nav-cta" onClick={() => setOpenModal(true)}>Login in</a></li>
          </ul>
        </nav>
      </header>
        <body>
          <div className="container">
            <div className="leftside">
              <nav class="left-nav">
                <ul class="left-nav-list">
                  <li><a href="#" class="main-nav-link">fast food</a></li>
                  <li><a href="#" class="main-nav-link">fast fast food</a></li>
                  <li><a href="#" class="main-nav-link">Slow food</a></li>
                  <li><a href="#" class="main-nav-link">Pizza</a></li>
                </ul>
              </nav>  
            </div>

            <div className="main">
              <section class="section-hero">
                <div class="hero-text-box">
                  <h1 class="heading-primary">
                    A healthy meal delivered to your door, every single day
                  </h1>
                  <p class="hero-description">
                    The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs. We have delivered 250,000+ meals last year!
                  </p>  
                  <a href="#" class="btn btn--full margin-right-sm">
                    Start eating well
                  </a>
                  <a href="#" class="btn btn--outline">
                    Lear more
                  </a>

                  <div class="delivered-meals">
                    <div class="delivered-imgs">
                      <img src={c1} />
                      <img src={c2} />
                      <img src={c3} />
                      <img src={c4} />
                      <img src={c5} />
                      <img src={c6} />
                    </div>
                    <p class="delivered-text"><span>250,000+</span> meals last year!</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="rightside">
              <p className="text-description">
                <nav class="left-nav">
                  <ul class="right-nav-list">
                    <li><a href="#" class="main-nav-link">About</a></li>
                    <li><a href="#" class="main-nav-link">Contacts</a></li>
                    <li><a href="#" class="main-nav-link">Menu</a></li>
                    <li><a href="#" class="main-nav-link">Reviews</a></li>
                  </ul>
                </nav>
              </p>
            </div> 

            {openModal && (
              <div className="modal">
                <div className="inputs">
                  <p>Login</p>
                  <input type="text" />
                  <p>Pass</p>
                  <input type="text" />
                </div>
                <div className="btn-block">
                  <a href="#" class="btn-login" onClick={() => setOpenModal(false)}>
                    Login
                  </a>
                </div>
              </div>
            )} 
          </div>
        </body>
    </div>
  );
}

export default App;
