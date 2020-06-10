import React from "react";
import { Link } from "react-router-dom";
class Nav extends React.Component {
  onClickNav = (e) => {
    if (
      e.target.className === "navigation__checkbox" ||
      e.target.className === "navigation__link"
    ) {
      document
        .querySelector(".navigation__nav")
        .classList.toggle("navigation__nav--active");
      document
        .querySelector(".navigation__background")
        .classList.toggle("navigation__background--active");

      document
        .querySelector(".navigation__icon")
        .classList.toggle("navigation--checked");
      document
        .querySelector(".navigation__button")
        .classList.toggle("navigation--checked");
      this.props.onClick();
    }
  };
  render() {
    return (
      <div
        className="navigation"
        onClick={(e) => {
          this.onClickNav(e);
        }}
      >
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon"> </span>
        </label>
        <div className="navigation__background"></div>
        <nav className="navigation__nav" id="navi-toggle">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link to="/" className="navigation__link">
                <span>01</span>Home
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="/work" className="navigation__link">
                <span>02</span>Work
              </Link>
            </li>
            {/* <li className="navigation__item">
              <a href="#section-features" className="navigation__link">
                <span>02</span>Key Attributes
              </a>
            </li>
            <li className="navigation__item">
              <a href="#section-skills" className="navigation__link">
                <span>03</span>Skills and Expertise
              </a>
            </li>
            <li className="navigation__item">
              <a href="#section-work" className="navigation__link">
                <span>04</span>Work
              </a>
            </li>
            <li className="navigation__item">
              <a href="#section-book" className="navigation__link">
                <span>05</span>Get in Touch
              </a>
            </li>
            <li className="navigation__item">
              <a href="/blog" className="navigation__link">
                <span>06</span>Blog
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    );
  }
}
export default Nav;
