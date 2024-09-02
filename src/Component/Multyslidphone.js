import React from "react";
import Slider from "react-slick";
import prm1 from "../Assets/product-2.webp";
import prm2 from "../Assets/product-1.webp";
import prm10 from "../Assets/product-3.webp";
import prm3 from "../Assets/product-4.webp";
import prm4 from "../Assets/product-5.webp";
import prm5 from "../Assets/product-6.webp";
import prm6 from "../Assets/product-7.webp";
import prm7 from "../Assets/product-8.webp";
import prm8 from "../Assets/product-9.webp";
import prm9 from "../Assets/product-10.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function MultipleRows2() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 0.5,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };
  return (
    <div className="slider-container s2 m2">
      <h2>NEW ARRIVALS PRODUCTS</h2>{" "}
      <h5>
        Investigationes demonstraverunt lectores legere me lius quod ii legunt
        saepius claritas est etiam processus dynamicus, qui sequitur mutationem.
      </h5>
      <Slider {...settings}>
        {" "}
        <div>
          <div className="prm1" data-aos="flip-up">
            <img src={prm1} className="prm" />
            <h4>Adidas</h4>
            <h5>300$ </h5>
            <div className="iv">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "white" }}
              />
            </div>
            <div className="stars">
              {" "}
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
            </div>
          </div>
        </div>{" "}
        <div>
          <div className="prm1" data-aos="flip-up">
            <img src={prm2} className="prm" />
            <h4>Pouma</h4>
            <h5>400$ </h5>
            <div className="iv">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "white" }}
              />
            </div>
            <div className="stars">
              {" "}
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
            </div>
          </div>
        </div>{" "}
        <div>
          <div className="prm1" data-aos="flip-up">
            <img src={prm3} className="prm" />
            <h4>Nike</h4>
            <h5>100$ </h5>
            <div className="iv">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "white" }}
              />
            </div>
            <div className="stars">
              {" "}
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
            </div>
          </div>
        </div>{" "}
        <div>
          <div className="prm1" data-aos="flip-up">
            <img src={prm4} className="prm" />
            <h4>Balanciga</h4>
            <h5>500$ </h5>
            <div className="iv">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "white" }}
              />
            </div>
            <div className="stars">
              {" "}
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
            </div>
          </div>
        </div>{" "}
        <div>
          <div className="prm1" data-aos="flip-up">
            <img src={prm5} className="prm" />
            <h4>Air max</h4>
            <h5>200$ </h5>
            <div className="iv">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "white" }}
              />
            </div>
            <div className="stars">
              {" "}
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
            </div>
          </div>
        </div>{" "}
        <div>
          <div className="prm1" data-aos="flip-up">
            <img src={prm6} className="prm" />
            <h4>Convers</h4>
            <h5>700$ </h5>
            <div className="iv">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "white" }}
              />
            </div>
            <div className="stars">
              {" "}
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
            </div>
          </div>
        </div>{" "}
        <div>
          <div className="prm1" data-aos="flip-up">
            <img src={prm7} className="prm" />
            <h4>Jorden</h4>
            <h5>250$ </h5>
            <div className="iv">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "white" }}
              />
            </div>
            <div className="stars">
              {" "}
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
            </div>
          </div>
        </div>{" "}
        <div>
          <div className="prm1" data-aos="flip-up">
            <img src={prm8} className="prm" />
            <h4>Adidas</h4>
            <h5>550$ </h5>
            <div className="iv">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "white" }}
              />
            </div>
            <div className="stars">
              {" "}
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
            </div>
          </div>
        </div>{" "}
        <div>
          <div className="prm1" data-aos="flip-up">
            <img src={prm9} className="prm" />
            <h4>Pouma</h4>
            <h5>300$ </h5>
            <div className="iv">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "white" }}
              />
            </div>
            <div className="stars">
              {" "}
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
            </div>
          </div>
        </div>{" "}
        <div>
          <div className="prm1" data-aos="flip-up">
            <img src={prm10} className="prm" />
            <h4>Balanciga</h4>
            <h5>900$ </h5>
            <div className="iv">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "white" }}
              />
            </div>
            <div className="stars">
              {" "}
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
            </div>
          </div>
        </div>{" "}
        <div>
          <div className="prm1" data-aos="flip-up">
            <img src={prm6} className="prm" />
            <h4>Convers</h4>
            <h5>100$ </h5>
            <div className="iv">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "white" }}
              />
            </div>
            <div className="stars">
              {" "}
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="prm1" data-aos="flip-up">
            <img src={prm2} className="prm" />
            <h4>Air max</h4>
            <h5>600$ </h5>
            <div className="iv">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "white" }}
              />
            </div>
            <div className="stars">
              {" "}
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "yellow", fontSize: "x-large" }}
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleRows2;
