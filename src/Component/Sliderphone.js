import pro001 from "../Assets/category-1.webp";
import pro002 from "../Assets/category-2.webp";
import pro003 from "../Assets/13.png";
import pro004 from "../Assets/category-3.webp";
import pro005 from "../Assets/pngegg (9).png";
import pro006 from "../Assets/pngegg (10).png";
import pro007 from "../Assets/category-3.webp";
import pro008 from "../Assets/pngegg (5).png";
import React from "react";
import Slider from "react-slick";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container n2" data-aos="flip-down">
      <Slider {...settings}>
        <div>
          <div className="proo2" data-aos="fade-right">
            {" "}
            <h1>Man</h1>
            <img src={pro001} alt="" />
            <button className="buy">Buy now</button>
            <button className="click">Click here</button>
          </div>
        </div>
        <div>
          <div className="proo2" data-aos="fade-up">
            {" "}
            <h1>Women</h1>
            <img src={pro002} alt="" />
            <button className="buy">Buy now</button>{" "}
            <button className="click">Click here</button>
          </div>
        </div>
        <div>
          <div className="proo2" data-aos="fade-left">
            {" "}
            <h1>Kids</h1>
            <img src={pro003} alt="" />
            <button className="buy">Buy now</button>{" "}
            <button className="click">Click here</button>
          </div>
        </div>
        <div>
          <div className="proo2">
            {" "}
            <h1>Both</h1>
            <img src={pro004} alt="" />
            <button className="buy">Buy now</button>{" "}
            <button className="click">Click here</button>
          </div>
        </div>
        <div>
          <div className="proo2">
            {" "}
            <h1>Man</h1>
            <img src={pro005} alt="" />
            <button className="buy">Buy now</button>{" "}
            <button className="click">Click here</button>
          </div>
        </div>
        <div>
          <div className="proo2">
            {" "}
            <h1>Kids</h1>
            <img src={pro006} alt="" />
            <button className="buy">Buy now</button>{" "}
            <button className="click">Click here</button>
          </div>
        </div>
        <div>
          <div className="proo2">
            {" "}
            <h1>women</h1>
            <img src={pro007} alt="" />
            <button className="buy">Buy now</button>{" "}
            <button className="click">Click here</button>
          </div>
        </div>
        <div>
          <div className="proo2">
            {" "}
            <h1>both</h1>
            <img src={pro008} alt="" />
            <button className="buy">Buy now</button>{" "}
            <button className="click">Click here</button>
          </div>
        </div>
        <div>
          <div className="proo2">
            {" "}
            <h1>Man</h1>
            <img src={pro003} alt="" />
            <button className="buy">Buy now</button>{" "}
            <button className="click">Click here</button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
