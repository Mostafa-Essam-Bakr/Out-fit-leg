import "../Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import Aos from "aos";
import { Link } from "react-router-dom";
import Ai from "../Ai";
export default function Nav() {
  useEffect(() => {
    Aos.init({ duration: 500, easing: "linear" });
  }, []);

  const [sticky, Setsticky] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      Setsticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  });
  return (
    <div className="Navp" id={`${sticky ? "sticky" : ""}`}>
      <nav className="navm">
        <div>
          <FontAwesomeIcon icon={faShoePrints} />
          <h1>Elegance </h1>
        </div>
        <div>
          <ul className="ulp">
            <li className="Homeli">
              Home
              <ul className="hsl">
                <li>Shooping</li>
                <li>Brands</li>
                <li>CLothes</li>
                <li>Bags</li>
                <li>Shoes</li>
              </ul>
            </li>

            <li>About US</li>
            <li>Restrants</li>
            <li>Pages</li>
            <li>
              <Link to="/">Contacts</Link>
            </li>
          </ul>
        </div>

        <div className="icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />

          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </nav>
    </div>
  );
}
