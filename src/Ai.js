import axios from "axios";
import Iframe from "react-iframe";
import "../src/Home.css";
import coai from "./Assets/coai.jpg";
import Aos from "aos";
import { useEffect } from "react";
import { GiRobotGolem } from "react-icons/gi";
import { FaRobot } from "react-icons/fa6";

export default function Ai() {
  useEffect(() => {
    Aos.init({ duration: 500, easing: "linear" });
  }, []);
  return (
    <div className="parentaichat">
      <div>
        <img className="vvvv" src={coai} />{" "}
        <h1 className="hai" data-aos="fade-up">
          <GiRobotGolem />
          Mishari Technical
        </h1>
        <div className="hsai" data-aos="fade-right">
          <h1>
            Welcome to Mishari
            <br /> Technical
          </h1>
          <h3>
            You can search for any
            <br /> request you have and <br />
            you will be answered <br /> as quickly as possible
          </h3>
          <div>
            <FaRobot />
            <div className="facepart"></div>
          </div>
        </div>
        <div className="pbtnai">
          {" "}
          <button className="btnai">Home</button>
          <button className="btnai">Chat boot</button>
          <button className="btnai">Results</button>
          <button className="btnai">My Acount</button>
          <GiRobotGolem />
        </div>
      </div>
      <div></div>
      <Iframe
        data-aos="fade-up"
        className="aiframe"
        src="https://udify.app/chatbot/tsFbuHN1xKIY6XPV"
        style="width: 100%; height: 100%; min-height: 700px"
        frameborder="0"
        allow="microphone"
      ></Iframe>
    </div>
  );
}
