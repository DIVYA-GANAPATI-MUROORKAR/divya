import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  return ( 
    <>
    <body>
      <nav class="navbar navbar-expand-lg  bg-warning">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">TRAVEL WEBSITE</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  </ul>
                  <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="search" aria-label="Search"></input>
                    <button class="btn btn-outline-success"><a herf="./Login.html">Login</a></button>
                    </form>
                    </div>
                    </div>
                    </nav>
                    <br></br>
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src="https://source.unsplash.com/random/1920x700/?aeroplane" height="600" class="d-block w-100" alt="..."></img>
                          </div>
                          <div class="carousel-item">
                            <img src="https://source.unsplash.com/random/1920x700/?byke" height="600" class="d-block w-100" alt="..."></img>
                            </div>
                            <div class="carousel-item">
                              <img src="https://source.unsplash.com/random/1920x700/?helicopter" height="600" class="d-block w-100" alt="..."></img>
                              </div>
                              </div>
                              </div>
                              <br></br>
                              <div class="container">
                                <div class="row">
                                  <div class=" col-md-6 col-lg-6 col-sm-12">
                                    <div class="card" >
                                      <img src="https://source.unsplash.com/random/1920x1080/?wallpaper,car," class="card-img-top" alt="..."></img>
                                      <div class="card-body">
                                        <h5 class="card-title">CAR</h5>
                                        <p class="card-text">TRAVEL IN LAXURY AND STYLE</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                        </div>
                                        </div>
                                        <div class=" col-md-6 col-lg-6 col-sm-12">
                                          <div class="card" >
                                            <img src="https://source.unsplash.com/random/1920x1080/?wallpaper,bus" class="card-img-top" alt="..."></img>
                                            <div class="card-body">
                                              <h5 class="card-title">BUS</h5>
                                              <p class="card-text">CONNECTING PEOPLE AND PLACES</p>
                                              <a href="#" class="btn btn-primary">Go somewhere</a>
                                              </div>
                                              </div>
                                              </div>
                                              <div class=" col-md-6 col-lg-6 col-sm-12">
                                                <div class="card">
                                                  <img src="https://source.unsplash.com/random/1920x1080/?wallpaper,ship" class="card-img-top" alt="..."></img>
                                                  <div class="card-body">
                                                    <h5 class="card-title">SHIP</h5>
                                                    <p class="card-text">WORLDWIDE FREIGHT SERVICES</p>
                                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    <div class=" col-md-6 col-lg-6 col-sm-12">
                                                      <div class="card" >
                                                        <img src="https://source.unsplash.com/random/1920x1080/?wallpaper,train" class="card-img-top" alt="..."></img>
                                                        <div class="card-body">
                                                          <h5 class="card-title">TRAIN</h5>
                                                          <p class="card-text">WELCOME TO BOOK YOUR TRAIN</p>
                                                          <a href="#" class="btn btn-primary">Go somewhere</a>
                                                          </div>
                                                          </div>
                                                          </div>
                                                          </div>
                                                          </div>
                                                          </body>
                                                          </>

                                                          );
                                                        }
                                                         export default Home;