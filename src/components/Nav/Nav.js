import React, { Component } from "react";
import "./Nav.css";

import "uikit/dist/css/uikit.min.css";
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

class Nav extends Component {
  render() {
    return (
      // Para atributos custom, React pide que se ponga = "true"
      <nav className="uk-navbar-container" uk-navbar="true">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <a href="#">Active</a>
            </li>
            <li>
              <a href="#">Parent</a>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li className="uk-active">
                    <a href="#">Active</a>
                  </li>
                  <li>
                    <a href="#">Item</a>
                  </li>
                  <li>
                    <a href="#">Item</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">Item</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
