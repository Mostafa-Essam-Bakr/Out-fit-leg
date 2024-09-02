import Carousel from "react-bootstrap/Carousel";
import shos1 from "../Assets/home2-slide1.webp";
import shos2 from "../Assets/home2-slide2.webp";
import shos3 from "../Assets/home1-slide2.webp";

import Aos from "aos";
import { useEffect } from "react";

function Slide1() {
  useEffect(() => {
    Aos.init({ duration: 500, easing: "linear" });
  }, []);

  // const [active, Setactive] = useState(false);

  /* const handelclick = () => {
    Setactive(true);
  };
*/
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img src={shos1} alt="First slide" className="shos1" />

          <h2 className="slide-title" data-aos="">
            New
          </h2>
          <h3 className="slide-subtitle" data-aos="">
            Sports Sneakers <br />
            <span>Men's like Flex</span>
          </h3>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={shos2} alt="First slide" className="shos1" />

          <h2 className="slide-title" data-aos="">
            Sale
          </h2>
          <h3 className="slide-subtitle" data-aos="">
            Sports Sneakers <br />
            <span>Men's like Flex</span>
          </h3>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={shos3} alt="First slide" className="shos1" />
          <h2 className="slide-title" data-aos="">
            Star
          </h2>
          <h3 className="slide-subtitle" data-aos="">
            Sports Sneakers <br />
            <span>Men's like Flex</span>
          </h3>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slide1;
