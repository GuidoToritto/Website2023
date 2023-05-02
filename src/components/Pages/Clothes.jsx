import React, { useState } from "react";
import Banner from "../../images/clothes/banner.png";
import video01 from "../../images/clothes/video01.mp4";
import video02 from "../../images/clothes/video02.mov";
import img01 from "../../images/clothes/img01.png";
import img02 from "../../images/clothes/img02.png";
import leather01 from "../../images/clothes/Leather/1.png";
import leather12 from "../../images/clothes/Leather/12.png";
import leather13 from "../../images/clothes/Leather/13.png";
import leather02 from "../../images/clothes/Leather/02.png";
import leather03 from "../../images/clothes/Leather/03.png";
import leather06 from "../../images/clothes/Leather/06.png";
import leather11 from "../../images/clothes/Leather/11.png";
import leather10 from "../../images/clothes/Leather/10.png";
import leather04 from "../../images/clothes/Leather/04.png";
import avatar01 from "../../images/clothes/AvatarAndClothes/01.png";
import avatar02 from "../../images/clothes/AvatarAndClothes/02.png";
import avatar03 from "../../images/clothes/AvatarAndClothes/03.gif";
import video03 from "../../images/clothes/video03.mp4";

export const Clothes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  return (
    <div className="container fade-out pt-3">
      {isOpen && (
        <div
          class="hover"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            background: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            opacity: 1,
          }}
          onClick={() => setIsOpen(false)}
        >
          <img
            class="hover"
            src={selectedImage}
            style={{ maxHeight: "90vh", maxWidth: "90vw" }}
          />
        </div>
      )}
      <br />
      <br />
      <img
        src={Banner}
        alt=""
        className="banner zoom img-zoom w-100 img-hover"
      />

      <h2 className="font text-primary text-center zoom img-zoom">
        Check out my collection!
      </h2>
      <br />
      <h4 className="text-center  zoom img-zoom">
        On this page you can see my work with different types of clothing.
      </h4>
      <br />
      <div className="row pt-5 zoom">
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="m-2">
            <video
              className="rounded card-img-top"
              muted
              autoPlay
              loop
              style={{ objectFit: "cover", zIndex: -1 }}
            >
              <source src={video01} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 img-zoom">
          <div className="card m-2">
            <img
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(img01)}
              src={img01}
              alt="Product"
              className="card img-fluid rounded-start img-hover"
              height="700"
            />
          </div>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="m-2">
            <video
              className="rounded card-img-top"
              muted
              autoPlay
              loop
              style={{ objectFit: "cover", zIndex: -1 }}
            >
              <source src={video02} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="mb-3 mw-540 p-4 mt-5 img-zoom">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={img02}
                className="card img-fluid rounded-start img-hover"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body text-align-center">
                <div className="mt-5">
                  <h2 className="font m-4 text-primary">Cowboy Oddaysey</h2>
                  <br />
                  <br />
                  <h2 className="m-4">
                    These are the clothes I designed for the collection,
                    featuring a variety of textures and colors to capture the
                    essence of cowboys with a fresh perspective and an original
                    narrative.
                  </h2>

                  <h3 class="display-4 card-text m-4 text-secondary">
                    In the "work" section, you can view my complete project.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card cardmb-3 mw-540 p-5 mt-5 img-zoom">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body text-align-center pt-4">
                <div className="">
                  <h2 className="font">Fake Leather</h2>
                  <h3 className=" m-4 text-secondary">
                    With its unique mix of elements, this collection is sure to captivate and excite you!
                  </h3>

                  <h2 class="card-text m-4 display-4  text-primary">
                    Intimity, dirty-work and rock&roll can you see in this collection lml
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <video
                className="rounded card-img-top"
                muted
                autoPlay
                loop
                style={{ objectFit: "cover", zIndex: -1 }}
              >
                <source src={video03} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="mt-5 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="card m-2">
            <img
              src={leather02}
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(leather02)}
              alt="Product"
              className="card-img-top"
            />
          </div>
        </div>

        <div className="mt-5 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="card m-2">
            <img
              src={leather10}
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(leather10)}
              alt="Product"
              className="card-img-top"
            />
          </div>
        </div>

        <div className="mt-5 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="card m-2">
            <img
              src={leather04}
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(leather04)}
              alt="Product"
              className="card-img-top"
            />
          </div>
        </div>
        <div className="mt-5 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="card m-2">
            <img
              src={leather06}
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(leather06)}
              alt="Product"
              className="card-img-top"
            />
          </div>
        </div>
        <div className="mt-5 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="card m-2">
            <img
              src={leather03}
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(leather03)}
              alt="Product"
              className="card-img-top"
            />
          </div>
        </div>
        <div className="mt-5 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="card m-2">
            <img
              src={leather11}
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(leather11)}
              alt="Product"
              className="card-img-top"
            />
          </div>
        </div>
        <div className="mt-5 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="card m-2">
            <img
              src={leather01}
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(leather01)}
              alt="Product"
              className="card-img-top"
            />
          </div>
        </div>
        <div className="mt-5 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="card m-2">
            <img
              src={leather13}
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(leather13)}
              alt="Product"
              className="card-img-top"
            />
          </div>
        </div>
        <div className="mt-5 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="card m-2">
            <img
              src={leather12}
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(leather12)}
              alt="Product"
              className="card-img-top"
            />
          </div>
        </div>
      </div>
      <div className="mb-4 mw-540 p-4 mt-5">
        <div className="row g-0">
          <div className="card col-md-3 img-zoom">
            <img
              src={avatar03}
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(avatar03)}
              className="img-fluid rounded-start img-hover"
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="card-body text-align-center">
              <div className="mt-5">
                <h2 className="font m-4 text-primary text-center">
                  Avatars and Clothes
                </h2>
                <p className="display-6 m-4 text-center">
                  Magics models and outfits
                </p>
              </div>
            </div>
          </div>
          <div className="card col-md-3">
            <img
              src={avatar01}
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(avatar01)}
              className="card img-fluid rounded-start img-hover img-zoom"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div>
        <img
          style={{ cursor: "pointer" }}
          onClick={() => handleClick(avatar02)}
          className="card img-fluid rounded-start img-zoom"
          src={avatar02}
          alt=""
        />
      </div>

      <br />
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

export default Clothes;
