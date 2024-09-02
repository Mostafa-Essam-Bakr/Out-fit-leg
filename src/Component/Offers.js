import off1 from "../Assets/banner_1.3.webp";
import off2 from "../Assets/cms_3.3.webp";
import off3 from "../Assets/bg_spe.webp";
import disoff1 from "../Assets/product-2.webp";
import disoff2 from "../Assets/product-3.webp";
import disoff3 from "../Assets/product-9.webp";
import disoff4 from "../Assets/product-7.webp";
import disoff5 from "../Assets/product-6.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Offers() {
  return (
    <div className="offersparent">
      <h1>OUR IN STORE</h1>
      <h5>
        Investigationes demonstraverunt lectores <br />
        legere me lius quod ii legunt saepius claritas est etiam processus
        dynamicus, qui sequitur mutationem.
      </h5>

      <div className="imgoffers">
        <div className="off1" data-aos="zoom-in">
          {" "}
          <img src={off1} alt="" />
        </div>
        <div className="off1" data-aos="zoom-in">
          {" "}
          <img src={off2} alt="" />
        </div>
      </div>

      <div className="childoff" data-aos="fade-down">
        <img src={off3} alt="" className="imgchid" />{" "}
        <div className="imgoff3" data-aos="fade-down">
          <img src={disoff1} />
          <img src={disoff2} />
          <img src={disoff3} />
          <img src={disoff4} />
          <img src={disoff5} />
        </div>
        <div className="disoff">
          <h2>Top Mens slippers</h2>
          <h4>
            Canon's first 4K <br /> UHD Camcorder
            <br /> the GX10 has a compact <br /> and <br />
            <br /> portable design <br />
            that delivers ...
          </h4>
          <div data-aos="flip-right">
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
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "yellow", fontSize: "x-large" }}
            />
          </div>

          <h3 data-aos="flip-right"> Discount 500$</h3>

          <button
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Add To Favrout
          </button>
        </div>
      </div>
    </div>
  );
}
