import React, { Component } from "react";
import "./Nav.css";
import { getCharacters } from "../../services/characterService";
import { Link } from "react-router-dom";


import "uikit/dist/css/uikit.min.css";
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

class Nav extends Component {

  state = {
    results:[]
  }

  constructor(){
    // Al principio
    super();
    console.log("Constructor");
  }

  componentWillMount() {
    // Antes de que se monte el componente
    // Este componente ya es legacy
  }

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
                {/* Atención a cómo retorna un elemento multilinea de forma implícita */}
                  {this.state.results.map((item, index) => (
                    <li key={index} className="uk-active">
                    {/* Se cambia lo siguiente para que ya no cargue la página completa */}
                      {/* <a href={`/detail/${item.id}`}>{item.name}</a> */}
                      <Link to={`/detail/${item.id}`}>{item.name}</Link>
                    </li>
                  ))}
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

  componentDidMount() {
    // Una vez que se montó
    getCharacters().then(res => {
      // console.log(res);
      // Ver por qué no funcionó con
      // const { data } = res;
      // this.setState({ data.results });

      const { results } = res.data;
     this.setState({ results });
    });
  }

}

export default Nav;
