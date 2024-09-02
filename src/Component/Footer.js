import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { MdCall } from "react-icons/md";
import payment from "../Assets/payment-2.webp";

export default function Footer() {
  const [email, SetEmail] = useState("");
  const [cong, Setcong] = useState(false);
  const [accept, SetAccept] = useState(false);

  async function Submit(e) {
    let flag = true;
    e.preventDefault();
    if (email === "") {
      flag = false;
    } else if ((flag = true)) {
      Setcong(true);
    }
  }
  return (
    <div className="parentfooter">
      <div className="footeruper">
        <h1>JOIN OUR NEWSLETTER</h1>
        <div className="pimputfoot">
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            value={email}
            required
            onChange={(e) => SetEmail(e.target.value)}
          />
          {accept && <p>email is allready taken</p>}
        </div>{" "}
        <h6>
          {" "}
          To get the latest news from us <br />
          please subscribe your email.
        </h6>
        <button type="submit" onClick={Submit}>
          Subscribe
        </button>
      </div>
      <Spinner
        animation="border"
        role="status"
        style={{
          display: `${cong === false ? "none" : "flex"}`,
          color: "blue",
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <h3
        data-aos="flip-left"
        className="hsub"
        style={{ display: `${cong === false ? "none" : "flex"}` }}
      >
        Thank you {email} You have successfully subscribed You can browse with
        complete ease
      </h3>
      <hr className="hrrr" />
      <div className="p0ulfoot">
        <div className="pulfoot">
          <ul className="ulfoot">
            <h5>CUSTOM LINK</h5> <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>{" "}
        <div className="pulfoot">
          <ul className="ulfoot">
            <h5>PRODUCTS</h5> <li>Prices drop</li>
            <li>Best sales</li>
            <li>Sitemap</li>
          </ul>
        </div>{" "}
        <div className="pulfoot">
          <ul className="ulfoot">
            <h5>OUR COMPANY</h5> <li>OUR COMPANY</li>
            <li>Delivery</li>
            <li>Secure payment</li>
          </ul>
        </div>{" "}
        <div className="pulfoot">
          <ul className="ulfoot">
            <h5>YOUR ACCOUNT</h5> <li>Home</li>
            <li>Personal info</li>
            <li>Addresses</li>
          </ul>
        </div>
      </div>
      <hr className="hrrr" />
      <div className="footfoot1">
        {" "}
        <div className="logolunch">
          <FontAwesomeIcon icon={faShoePrints} />
          <h1 style={{ color: "white" }}>Elegance </h1>
        </div>{" "}
        <div>
          <FaLocationDot />
          <h5>
            ADDRESS :<br /> Your address goes here
          </h5>
        </div>
        <div>
          <MdMarkEmailRead />
          <h5>
            EMAIL :
            <br /> demo@examplecom
          </h5>
        </div>
        <div>
          <MdCall />
          <h5>
            PHONE :
            <br /> 0123456789
          </h5>
        </div>
      </div>
      <hr className="hrrr" />
      <img src={payment} alt="" />
      <p style={{ color: "white" }}>
        SITE MAP SEARCH TERMS ADVANCED SEARCH ORDERS AND RETURNS CONTACT US
      </p>
      <p style={{ color: "white" }}>© 2021 Pullman Made with by HasThemes</p>
    </div>
  );
}
