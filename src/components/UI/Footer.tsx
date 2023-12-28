import { useEffect, useState } from "react";
import "./Footer.scss";
const Footer = () => {
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const element = document.getElementsByClassName("side-line");
      if (element[0]) {
        console.log(true);
      } else return;
      const position = element[0].getBoundingClientRect().top;
      if (position < window.innerHeight) {
        setAnimation(true);
      }
    });
  }, []);

  return (
    <div className="footer">
      {" "}
      <div className={animation ? "side-line-animation" : "side-line"}></div>
      <div className="block-animation">
        <img src="/logo.png" alt="" />
      </div>{" "}
      <div className={animation ? "side-line-animation" : "side-line"}></div>
    </div>
  );
};

export default Footer;
