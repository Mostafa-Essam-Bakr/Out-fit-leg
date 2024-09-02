import imgpro1 from "../Assets/2 (2).webp";
import cc1 from "../Assets/cc.png";

export default function Pro() {
  return (
    <div className="proparent">
      <div className="pro1g">
        <div className="imgpro1" data-aos="fade-up-right">
          <button className="btn1">Shoop</button>
          <img src={imgpro1} alt="ef" className="imgpro10" />
        </div>
        <div className="hs">
          <h1 data-aos="fade-left">PULLMAN SNEAKER ABOUT US.</h1>
          <h5 data-aos="fade-left">
            Investigationes demonstraverunt lectores legere me. Quisque
            consequat
            <br />
            venenatis rutrum. Quisque posuere enim augue,
            <br /> in rhoncus diam dictum non.Nunc id ante quis tellus faucibus
          </h5>

          <p data-aos="flip-right">
            Manchester Road 123-78B, Silictown 7854MD, Great Country
            <br /> Phone: +46 123 456 789
            <br /> Email: hello@sitename.com
          </p>
          <img src={cc1} alt="" className="cc1" data-aos="flip-right" />
        </div>
      </div>
    </div>
  );
}
