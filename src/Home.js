import "./Home.css";
import pro from "./Assets/1.jpeg";
import Slide1 from "./Component/Slider1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faHandshakeAngle } from "@fortawesome/free-solid-svg-icons";
import { faDumpsterFire } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Component/Nav";
import Aos from "aos";
import { useEffect } from "react";
import Example from "./Component/Lunch";
import Pro from "./Component/Products";
import bg from "./Assets/bg-body1.webp";
import bg2 from "./Assets/bg-testimonial.webp";

import Pro2 from "./Component/Products2";
import MultipleItems from "./Component/slick";
import CenterMode from "./Component/Sliderphone";
import MultipleRows from "./Component/Multyslid";
import MultipleRows2 from "./Component/Multyslidphone";
import Offers from "./Component/Offers";
import StaggeredDropDown from "./Component/Droooopo";
import AutoPlayid from "./Component/Idperson";
import Footer from "./Component/Footer";
import Ai from "../src/Ai";
import { Outlet } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 500, easing: "linear" });
  }, []);
  return (
    <div className="body">
      <img src={bg} className="bg" />

      <Example />

      <div className="hed">
        <div>
          <h5>Check Out</h5>
          <FontAwesomeIcon icon={faMoneyCheckDollar} />
        </div>
        <div>
          {" "}
          <h5>Currancy</h5>
          <FontAwesomeIcon icon={faDollarSign} />
        </div>

        <div>
          {" "}
          <h5> My Account</h5>
          <FontAwesomeIcon icon={faUser} />
        </div>

        <div>
          {" "}
          <h5>Sign in</h5>
          <FontAwesomeIcon icon={faRightToBracket} />
        </div>
      </div>

      <Nav />

      <div className="slidparent">
        <Slide1 />
      </div>

      <div className="parentp">
        <div data-aos="fade-up">
          <span>
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <h2>Extra hearts</h2>
          <h5>Place hearts for products to get more chances</h5>
        </div>
        <div data-aos="fade-up">
          <span>
            {" "}
            <FontAwesomeIcon icon={faGift} />
          </span>
          <h2>Gifts now</h2>
          <h5>Interact, search, buy and get gifts</h5>
        </div>
        <div data-aos="fade-up">
          <span>
            {" "}
            <FontAwesomeIcon icon={faDumpsterFire} />
          </span>
          <h2>Markets</h2>
          <h5>Shop on the website and choose what you want</h5>
        </div>

        <div data-aos="fade-up">
          <span>
            <FontAwesomeIcon icon={faHandshakeAngle} />
          </span>
          <h2>contract</h2>
          <h5>Contract with us and enjoy superior benefits</h5>
        </div>
      </div>
      <Pro />
      <MultipleItems />
      <CenterMode />
      <img src={bg2} className="bg2" />

      <MultipleRows />
      <MultipleRows2 />

      <Offers />

      <AutoPlayid />
      <Footer />
      <Outlet />
    </div>
  );
}
