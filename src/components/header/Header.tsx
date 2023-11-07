import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/shared/logo.svg";
import menuIcon from "../../assets/shared/icon-hamburger.svg";
import exitIcon from "../../assets/shared/icon-close.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const mobileCondition = clicked && windowWidth < 769;

  const onHeaderLinkClick = () => setClicked(false);

  useEffect(() => {
    addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, [mobileCondition]);

  return (
    <div className="header">
      <img className="logo" src={logo} alt="Logo" />

      <hr />

      {!clicked && (
        <img
          className="menu-icon"
          src={menuIcon}
          alt=""
          onClick={() => setClicked(true)}
        />
      )}

      <div
        className={
          mobileCondition ? "mobile-header-nav-elements" : "header-nav-elements"
        }
      >
        {mobileCondition && (
          <img
            className="close-icon"
            src={exitIcon}
            alt=""
            onClick={() => setClicked(false)}
          />
        )}

        <HeaderLink
          onClickHandler={onHeaderLinkClick}
          to="/"
          content="HOME"
          numbering="00"
        />
        <HeaderLink
          onClickHandler={onHeaderLinkClick}
          to="/destination"
          content="DESTINATION"
          numbering="01"
        />
        <HeaderLink
          onClickHandler={onHeaderLinkClick}
          to="/crew"
          content="CREW"
          numbering="02"
        />
        <HeaderLink
          onClickHandler={onHeaderLinkClick}
          to="/technology"
          content="TECHNOLOGY"
          numbering="03"
        />
      </div>
    </div>
  );
};

type HeaderLinkPropsType = {
  onClickHandler: () => void;
  to: string;
  content: string;
  numbering: string;
};

const HeaderLink = ({
  onClickHandler,
  to,
  content,
  numbering,
}: HeaderLinkPropsType) => {
  return (
    <Link to={to} className="link" onClick={onClickHandler}>
      <div>
        <span>{numbering}</span> {content}
      </div>
    </Link>
  );
};

export default Header;
