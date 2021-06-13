import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo512.png";
import { links, media } from "../utils/links";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="nav-link mobile-nav">
            <img src={logo} className="navbar-brand" alt="Jersey Republic" />
            Jersey Republic
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id} className="nav-item me-4">
                    <Link className="nav-link" to={url}>
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="navbar-nav">
              <li>
                {media.slice(0, 2).map((m) => {
                  return (
                    <Link
                    className='mx-3 mobile-nav-logo'
                      key={m.id}
                      to={{
                        pathname: m.link,
                      }}
                      target="_blank"
                    >
                      <img src={m.img} alt={m.name} style={{ height: 39 }} />
                    </Link>
                  );
                })}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
