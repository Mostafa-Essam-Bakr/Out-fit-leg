import React from "react";
import Slider from "react-slick";
import pe1 from "../Assets/1id.webp";
import pe11 from "../Assets/1id...webp";
import pe2 from "../Assets/2id.webp";
import pe22 from "../Assets/2id...webp";
import pe3 from "../Assets/3id.webp";
import pe33 from "../Assets/3id...webp";
import pe4 from "../Assets/4id.webp";
import pe44 from "../Assets/4id...webp";
import pe5 from "../Assets/5id.webp";
import pe55 from "../Assets/5id...webp";
import { IoPersonCircle } from "react-icons/io5";

function AutoPlayid() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider-id" data-aos="zoom-in">
      <h1 className="h1id">Clinets</h1>
      <Slider {...settings}>
        <div className="pid">
          <img src={pe1} className="peshow" />
          <img src={pe11} className="pehedien" />
          <h1>Natalia</h1>
          <IoPersonCircle />
        </div>{" "}
        <div className="pid">
          <img src={pe2} className="peshow" />
          <img src={pe22} className="pehedien" /> <h1>Maikel</h1>
          <IoPersonCircle />
        </div>{" "}
        <div className="pid">
          <img src={pe3} className="peshow" />
          <img src={pe33} className="pehedien" /> <h1>Lele</h1>
          <IoPersonCircle />
        </div>{" "}
        <div className="pid">
          <img src={pe4} className="peshow" />
          <img src={pe44} className="pehedien" /> <h1>TOOM</h1>
          <IoPersonCircle />
        </div>{" "}
        <div className="pid">
          <img src={pe5} className="peshow" />
          <img src={pe55} className="pehedien" /> <h1>Skarlt</h1>
          <IoPersonCircle />
        </div>{" "}
      </Slider>
      <h1 className="h1id">FROM OUR BLOG</h1>
      <p className="h1id">
        Investigationes demonstraverunt lectores legere me lius quod ii legunt
        saepius claritas
        <br /> est etiam processus dynamicus, qui sequitur mutationem.
      </p>
    </div>
  );
}

export default AutoPlayid;
