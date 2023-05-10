import React, { useState } from "react";
import Cap1 from "../../images/work/cowboy/cap01.gif";
import Cap2 from "../../images/work/cowboy/cap2.gif";
import Cap3 from "../../images/work/cowboy/cap3.png";
import Cap4 from "../../images/work/cowboy/cap4.gif";
import ana01 from "../../images/work/AnaCollab/Ana_2.png";
import ana02 from "../../images/work/AnaCollab/awakening_03_pose2_1_hair_plastic_002_new.png";
import ana03 from "../../images/work/AnaCollab/awakening1_003_02.png";
import ana04 from "../../images/work/AnaCollab/meface1.png";
import ana05 from "../../images/work/AnaCollab/meface5.png";
import ana06 from "../../images/work/AnaCollab/vfinal.png";
import ani01 from "../../images/work/Anita/01.gif";
import ani02 from "../../images/work/Anita/02.gif";
import ani03 from "../../images/work/Anita/03.gif";
import ani04 from "../../images/work/Anita/04.png";
import portraid01 from "../../images/work/03/01.png";
import portraid02 from "../../images/work/03/02.png";
import portraid03 from "../../images/work/03/03.gif";
import portraid04 from "../../images/work/03/04.png";
import portraid05 from "../../images/work/03/05.jpg";
import portraid06 from "../../images/work/03/06.png";
import video from "../../images/work/video.mp4";
import ReactPlayer from "react-player";
import { useEffect } from "react";

export const Work = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  return (
    <div className="container pt-5 fade-out">
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
            class="hover card"
            src={selectedImage}
            style={{ maxHeight: "90vh", maxWidth: "90vw" }}
          />
        </div>
      )}

      <p className="font text-end  space">Cowboy Oddaysey</p>
      <p className="text-end zoom display-6 text-secondary">
        Join me to watch this four-episode story.
      </p>
      <br />

      <div className="row row-cols-1 row-cols-md-2 g-4 zoom">
        <div className="col">
          <div className="card">
            <img
              className="rounded-top"
              src={Cap1}
              alt=""
              onClick={() => handleClick(Cap1)}
              style={{ cursor: "pointer" }}
            />
            <div class="card-body">
              <h5 class="display-4 text-primary">Capitulo uno: Acuerdo</h5>
              <p class="card-text">
                Tras querer aliviar el inmenso ardor de alguna herida, como un
                diafragma que se abre y se cierra sin parar, un pergamino
                comienza a trazar las primeras letras de este acuerdo. Una
                solicitud poco prometedora pretende una felicidad instantánea,
                pero solo ofrece una desencadenante oscuridad sin estrellas. No
                existe número ni letra que te haga escapar del perímetro de tu
                ser, una luz confundida que logra no creer en la verdad.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={Cap4}
              alt=""
              className="rounded-top"
              onClick={() => handleClick(Cap4)}
              style={{ cursor: "pointer" }}
            />
            <div class="card-body">
              <h5 class="display-4 text-primary">Capitulo cuatro: Estanco</h5>
              <p class="card-text">
                El deselance de una breve historia se direcciona hacia la amarga
                sensación de resolverlo todo de la peor manera. El estanco se
                puede interpretar como el campo donde se ejecuta esta escena,
                pero también se podría decir que el estanco es cuando damos por
                concluido algo que aún no tiene solución.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={Cap2}
              alt=""
              className="rounded-top"
              onClick={() => handleClick(Cap2)}
              style={{ cursor: "pointer" }}
            />
            <div class="card-body">
              <h5 class="display-4 text-primary">Capitulo dos: desarrollo</h5>
              <p class="card-text">
                Está por ebullir en el estómago las asquerosas sensaciones de
                doblegarse por una necesidad, evidentemente, no tan urgente.
                Anomatopella es el hilo que enhebra este acuerdo.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={Cap3}
              alt=""
              className="rounded-top"
              onClick={() => handleClick(Cap3)}
              style={{ cursor: "pointer" }}
            />
            <div class="card-body">
              <h5 class="display-4 text-primary">
                Capitulo tres: Anomatopella
              </h5>
              <p class="card-text">
                No hay nada de heroico en escupir polvo, ni hacer acariciar un
                disparo a alguien, porque no se puede aclarar con oscuridad ni
                tampoco descansar sin perdonar.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <p className="font text-center zoom">Awakening me</p>
      <p className="text-center zoom pt-3 display-6 text-secondary">
        A collab with Anastasia Sitner
      </p>
      <br />

      <div className="row row-cols-1 row-cols-md-2 g-4 zoom">
        <div className="col">
          <div className="card">
            <img
              src={ana02}
              alt=""
              className="card"
              onClick={() => handleClick(ana02)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={ana03}
              alt=""
              className="card"
              onClick={() => handleClick(ana03)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div class="col">
          <div class="card mt-5">
            <img
              src={ana06}
              alt=""
              className="card"
              onClick={() => handleClick(ana06)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={ana04}
              alt=""
              className="card"
              onClick={() => handleClick(ana04)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div class="card">
            <img
              src={ana05}
              alt=""
              className="card"
              onClick={() => handleClick(ana05)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

      <p className="font text-start zoom  pt-5">
        La violencia es una energía mal aprovechada.
      </p>
      <p className="text-start zoom  pt-3 display-6 text-secondary">
        Uno no puede prevenir lo inesperado. Uno no puede saber lo que va a
        ocurrir, lo que no se puede programar.
      </p>
      <h3>Collab with Coqo Ciapa & Anita B Queen</h3>
      <br />

      <div className="row row-cols-1 row-cols-md-2 g-4 zoom">
        <div className="col">
          <div className="card">
            <img
              src={ani01}
              alt=""
              className="card"
              onClick={() => handleClick(ani01)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={ani02}
              alt=""
              className="card"
              onClick={() => handleClick(ani02)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={ani03}
              alt=""
              className="card"
              onClick={() => handleClick(ani03)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={ani04}
              alt=""
              className="card"
              onClick={() => handleClick(ani04)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

      <br />

      <p className="font text-end zoom  pt-5">Portraids</p>
      <br />

      <div className="row row-cols-1 row-cols-md-2 g-4 zoom">
        <div className="col">
          <div className="card">
            <img
              src={portraid01}
              alt=""
              className="card"
              onClick={() => handleClick(portraid01)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={portraid02}
              alt=""
              className="card"
              onClick={() => handleClick(portraid02)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={portraid03}
              alt=""
              className="card"
              onClick={() => handleClick(portraid03)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={portraid04}
              alt=""
              className="card"
              onClick={() => handleClick(portraid04)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

      <div class="card mt-4">
        <img
          src={portraid06}
          alt=""
          className="card"
          onClick={() => handleClick(portraid06)}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="mb-3 mw-540 p-4 ">
        <div className="">
          <div className="">
            <div className="card-body text-center">
              <div className="mt-5">
                <h2 className="font mt-4">SS 23 x Others</h2>

                <p className="display-6">
                  I'm working with various artists in Estupido Estudio project,
                  creating advertising for Other
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReactPlayer
        url={require("../../images/work/video.mp4")}
        width="100%"
        height="100%"
        controls
      />

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

export default Work;
