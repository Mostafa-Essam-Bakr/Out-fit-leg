import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";
import StaggeredDropDown from "../Component/Droooopo";
import StaggeredDropDown2 from "../Component/Droooopo2";
import StaggeredDropDown3 from "../Component/Droooopo3";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { PiListStarFill } from "react-icons/pi";
import { FcAbout } from "react-icons/fc";
import { CiBoxList } from "react-icons/ci";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="lunch">
      <>
        <Button variant="primary" onClick={handleShow}>
          <CiBoxList />
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton style={{ color: "white" }}>
            <Offcanvas.Title>
              {" "}
              <div className="logolunch">
                <FontAwesomeIcon icon={faShoePrints} />
                <h1>Elegance </h1>
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <h1 data-aos="fade-up">WHAT IF YOU CAN?</h1>
            <h2>There is only one way to find out. Yalla.</h2>

            <StaggeredDropDown />
            <StaggeredDropDown2 />
            <StaggeredDropDown3 />

            <hr className="hrrr" />

            <ul className="footlunchul">
              <li>
                <Link>
                  {" "}
                  <FaSignInAlt /> Sign in
                </Link>
              </li>
              <li>
                <Link>
                  {" "}
                  <MdConnectWithoutContact /> Contact Us
                </Link>
              </li>{" "}
              <li>
                <Link>
                  {" "}
                  <FcAbout /> About Us
                </Link>
              </li>{" "}
              <li>
                <Link>
                  {" "}
                  <PiListStarFill />
                  Wish List
                </Link>
              </li>
            </ul>
            <hr className="hrrr" />
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </div>
  );
}

export default Example;
