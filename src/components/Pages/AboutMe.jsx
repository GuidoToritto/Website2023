import React from "react";
import Portraid from "../../images/aboutme/portraid.jpg";
import { hover } from "@testing-library/user-event/dist/hover";

export const AboutMe = () => {
  return (
    <div className="container text-center fade-out zoom">
      <br /><br /><br /><br /><br /><br /><br /><br />
      <div className="row">
        <div className="col-12 col-lg-6 spacecard border-primary mb-3 mw-18">
          <div className="font pt-5">Who I am...</div>
          <div className=" mx-5 card-body text-primary">
            <h3>
              I'm a 3D and web designer with a passion for cutting-edge
              technology and creative projects.
            </h3>
            <h6 className="text-secondary mx-4">
              With three years of experience in advertising and freelance work,
              I specialize in crafting 3D spaces, animations, objects, clothing,
              and avatars. However, I'm also adept at designing websites and am
              always eager to expand my skillset. I'm committed to continual
              learning and self-improvement, allowing me to approach
              problem-solving with a fresh and innovative perspective.
            </h6>
          </div>
        </div>
        <div className="col display-6 mt-5 ">
          <img
            className="w-50  rounded-circle  img-hover"
            src={Portraid}
            alt=""
          />
          <p className="card-text display-5 pt-2 text-primary">
            Hi! I'm Guido Toritto
          </p>
          <h4 className="card-text">3D Artist</h4>
          <h5 className="card-text text-secondary">Buenos Aires, Argentina</h5>
          <a
            href="mailto:guidotoritto@outlook.com"
            style={{ textDecoration: "none" }}
          >
            <h5 className="card-text text-secondary img-zoom">
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
