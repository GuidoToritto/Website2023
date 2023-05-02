import React from "react";
import Portraid from "../../images/aboutme/portraid.jpg";
import { hover } from "@testing-library/user-event/dist/hover";

export const AboutMe = () => {
  return (
    <div className="container text-center pt-5 fade-out zoom">
      <div className="row pt-5 ">
        <div className="mt-5 pt-5 col-sm-12 col-md-12 col-lg-12 col-xl-6 display-6">
          <div className="card border-primary mb-3 mw-18">
            <div className="font pt-5 img-zoom">Who I am...</div>
            <div className="pt-5 card-body text-primary">
              <h3>
              I'm a 3D and web designer with a passion for cutting-edge
                technology and creative projects.
              </h3>
              <h6 className="text-secondary card-text ">
                With three years of experience
                in advertising and freelance work, I specialize in crafting 3D
                spaces, animations, objects, clothing, and avatars. However, I'm
                also adept at designing websites and am always eager to expand
                my skillset. I'm committed to continual learning and
                self-improvement, allowing me to approach problem-solving with a
                fresh and innovative perspective.
              </h6>
            </div>
          </div>
        </div>
        <div className="col display-6 mt-5 pt-5">
          <img
            className="w-50  rounded-circle img-zoom"
            src={Portraid}
            alt=""
          />
          <p className="card-text display-5 pt-2 text-primary img-zoom">
            Hi! I'm Guido Toritto
          </p>
          <h4 className="card-text img-zoom">3D Artist</h4>
          <h5 className="card-text text-secondary img-zoom">
            Buenos Aires, Argentina
          </h5>
          <a href="mailto:guidotoritto@outlook.com" style={{textDecoration:'none'}}>
          <h5 className="card-text text-secondary img-zoom"  >
            guidotoritto@outlook.com
          </h5>
          </a>
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
};
