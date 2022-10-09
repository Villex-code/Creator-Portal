import React from "react";
import "./header.scss";
import { BsClipboardData } from "react-icons/bs";
import { ImDatabase } from "react-icons/im";
import { MdDataExploration, Md4GMobiledata } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import Video from "../../assets/bg.mp4";

const Header = () => {
  return (
    <section className="header__section">
      <div className="header__inside">
        <h4>
          We analyse your data <br /> & take data-driven decisions that
          <br />
          help you grow{" "}
        </h4>
        <h5>
          Co-Found by Vasilis D. and Kostantinos P. <br />
          Currently doing business worldwide
        </h5>
        <button className="header__button">Check out our Work</button>
      </div>
    </section>
  );
};

export default Header;
