import React from "react";

const footer = () => {
  return (
    <footer id="section-footer" className="section-footer">
      <h1 className="heading-secondary footer__logo-box">C Healey</h1>

      <div className="footer__navigation">
        <ul className="footer__list">
          <li className="footer__item">
            <a href="#section-header" className="footer__link">
              Home
            </a>
          </li>
          <li className="footer__item">
            <a href="#section-book" className="footer__link">
              Get in Touch
            </a>
          </li>
          {/* <li className="footer__item">
            <a href="#" className="footer__link">
              Privacy policy
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Terms
            </a>
          </li> */}
        </ul>
      </div>

      <p className="footer__copyright">
        Built by{" "}
        <a href="#section-header" className="footer__link">
          Catherine Healey
        </a>
        &nbsp;Copyright &copy; 2019 Design adapted from Jonas Schmedtmann -
        Advanced CSS and Sass.
      </p>
    </footer>
  );
};
export default footer;
