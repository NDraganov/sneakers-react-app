import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          title="Frontend Mentor"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
      </div>
      <div>
        Coded by{" "}
        <a
          href="https://github.com/NDraganov"
          title="Nedyalko Draganov"
          target="_blank"
          rel="noreferrer"
        >
          Nedyalko Draganov
        </a>
      </div>
    </div>
  );
}
export default Footer;
