import React from "react";
import Banner from "../../images/home/banner_01.jpg";
import Banner02 from "../../images/home/banner_02.jpg";
import Banner03 from "../../images/home/banner_03.jpg";
import Portrait from "../../images/home/portraid.jpg";
import img01 from "../../images/home/ea340a125976779.61245b1e0245b.jpg";
import img02 from "../../images/home/02.png";
import img03 from "../../images/home/vfinal_04.png";
import Work from "./Work";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container pt-5 fade-out">
      <div className="img-zoom space">
        <p className="font text-center text-primary zoom">
          Welcome to
          <span className="color-font zoom "> littlebbull</span>
          's website
        </p>
        <h3 className="text-center text-secondary zoom pt-4">
          On this amazing website, you can see inside me my feelings and my
          perspective on everything
        </h3>
      </div>

      <br />
      <br />
      <div id="carouselExampleCaptions" className="carousel slide zoom ">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Banner} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Capitulo cuatro: Acuerdo</h5>
              <p>
                Tras querer aliviar el inmenso ardor de alguna herida, como un
                diafragma que se abre...
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Banner02} className="d-block w-100" alt="" />{" "}
            <div className="carousel-caption d-none d-md-block">
              <h5>Working togheter</h5>
              <p>
                I made this collab with the artist Anastasia Sitner , click here
                to see more!
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Banner03} className="d-block w-100" alt="" />{" "}
            <div className="carousel-caption d-none d-md-block">
              <h5>I exist because I'm thinking</h5>
              <p>Self-portaid what I made with Blender and Daz3D</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="card-group zoom">
        <div className="card">
          <link rel="stylesheet" href="" />

          <Link to="/work">
            <img
              className="w-100"
              src={img01}
              style={{ cursor: "pointer" }}
              alt=""
            />
          </Link>

          <div className="card-body">
            <Link to="/work" style={{ textDecoration: "none" }}>
              <h5 className="display-4 text-primary">Art-Work</h5>
            </Link>
            <p className="card-text">
              In this section, you can see each of the works and collaborations
              that I have completed. I have a passion for creating and working
              with others to bring ideas to life.
            </p>
          </div>
        </div>
        <div className="card">
          <Link to="/clothes">
            <img className="w-100" src={img03} alt="" />
          </Link>
          <div className="card-body">
            <Link to="/clothes" style={{ textDecoration: "none" }}>
              <h5 className="display-4 text-primary">Clothes</h5>
            </Link>
            <p className="card-text">
              Here, you can see various clothing styles that showcase my passion
              for fashion and design. As a creative professional, I have a keen
              eye for detail and a deep appreciation for aesthetics.
            </p>
          </div>
        </div>
        <div className="card">
          <Link to="/work">
            <img className="w-100" src={img02} alt="" />
          </Link>
          <div className="card-body">
            <Link to="/work" style={{ textDecoration: "none" }}>
              <h5 className="display-6 text-primary">
                Avatar and cloth design
              </h5>
            </Link>
            <p className="card-text">
              In this case, you can see various types of avatars and clothes
              that I created with the help of an artist. As a digital artist, I
              love exploring new styles and techniques to create unique and
              visually appealing designs.
            </p>
            <p className="card-text"></p>
          </div>
        </div>
      </div>

      <div className="container text-center zoom ">
        <div className="row pt-5">
          <div className="col-sm-6 pt-5 mt-5">
            <div className="card img-zoom">
              <div className="card-body ">
                <Link to="/about-me" style={{ textDecoration: "none" }}>
                  <h3 className="card-title text-primary"> Know me better!</h3>
                </Link>

                <p className="card-text">
                  Hello! My name is Guido Toritto, and I'm from Buenos Aires,
                  Argentina. I'm currently 26 years old and studying website and
                  3D design. If you'd like to learn more about me, click the
                  buttons below!
                </p>
                <Link to="/about-me" className="card-link" style={{textDecoration:'none'}}>
                  More about
                </Link>
                <Link to="/work" style={{textDecoration:'none'}} className="card-link">
                  Works
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 pt-5">
            <Link to="/about-me">
              <img
                src={Portrait}
                className="w-50 justify-center rounded-circle img-zoom"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="m-5 text-center mb w-18 img-zoom">
        <div className="card-body">
          <h5 className="card-title">Thank you for taking the time to view!</h5>
          <p className="card-text">If you want to go up, push the button!</p>
          <a href="#" className="btn btn-outline-primary">
            Go up!
          </a>
        </div>
        
      </div>
      
    </div>
    
  );
};

export default Home;
