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
import { Carousel } from "react-bootstrap";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container pt-5 fade-out">
      <div className="space">
        <p className="font text-center text-primary zoom">
          Welcome to
          <span className="color-font zoom "> littlebbull</span>
          's website
        </p>
        <h3 className="text-center text-secondary zoom pt-4">
          On this amazing website, you can see inside me, my feelings and my
          perspective on everything
        </h3>
      </div>
      <br /><br />
      <Carousel fade>
        <Carousel.Item>
          <img src={Banner} className="card d-block w-100" alt="" />
          <Link/>
          <Carousel.Caption>
            <h5 className="carouseltext">Capitulo cuatro: Acuerdo</h5>
            <p className="carouseltext">
              Tras querer aliviar el inmenso ardor de alguna herida, como un
              diafragma que se abre...
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Banner02} className="card d-block w-100" alt="" />

          <Carousel.Caption>
            <h5 className="carouseltext">Working togheter</h5>
            <p className="carouseltext">
              I made this collab with the artist Anastasia Sitner , click here
              to see more!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Banner03} className="card d-block w-100" alt="" />

          <Carousel.Caption>
            <h5 className="carouseltext">I exist because I'm thinking</h5>
            <p className="carouseltext">Self-portaid what I made with Blender and Daz3D</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="card-group zoom pt-3">
        <div className="card p-3">
          <link rel="stylesheet" href="" />

          <Link to="/work">
            <img
              className="w-100 card"
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
        <div className="card  p-3">
          <Link to="/clothes">
            <img className="w-100 card" src={img03} alt="" />
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
        <div className="card  p-3">
          <Link to="/work">
            <img className="w-100 card" src={img02} alt="" />
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
        <div className="row ">
          <div className="col-sm-6 pt-5 mt-5">
            <div className="card img-zoom">
              <div className="card-body ">
                <Link to="/about-me" style={{ textDecoration: "none" }}>
                  <h3 className="card-title text-primary"> Know me better!</h3>
                </Link>

                <p className="card-text">
                  Hello! My name is Guido Toritto, and I'm from Buenos Aires,
                  Argentina. I'm 26 years old and studying website and
                  3D design. If you'd like to learn more about me, click the
                  buttons below!
                </p>
                <Link
                  to="/about-me"
                  className="card-link"
                  style={{ textDecoration: "none" }}
                >
                  More about
                </Link>
                <Link
                  to="/work"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
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

      <div className="m-5 text-center mb w-18 img-zoom"></div>
    </div>
  );
};

export default Home;
