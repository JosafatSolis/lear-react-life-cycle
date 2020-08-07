import React, { Component } from "react";
import { getCharacterById } from "../../services/characterService";

class Detail extends Component {
  state = {
    character: {},
  };

  //   Sólo se ejecuta la primera vez
  componentDidMount() {
    const { id } = this.props.match.params;
    getCharacterById(id).then((res) => {
      console.log("res", res);
      // const { character } = res.data;
      const { data: character } = res;
      this.setState({ character });
      console.log("ComponentDidMount:", character);
    });
  }

  // Tdoos los will se ejecutan antes del render
  // Recibe los nuevos props, se ejecuta justo antes de que el router le vaya a mandar los nuevos props al componente
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const { id } = nextProps.match.params;
      getCharacterById(id).then((res) => {
        // console.log("res", res);
        // const { character } = res.data;
        const { data: character } = res;
        this.setState({ character });
        // console.log("ComponentDidMount:", character);
      });
    }
  }

  render() {
    // console.log("Props de Detail: ", this.props);
    // Se regresa una línea sin paréntesis y se puede poner ; al final
    return (
      <div>
        <h1>Id: {this.props.match.params.id}</h1>
        <h2>Name: {this.state.character.name}</h2>
        <img src={this.state.character.image} alt={this.state.character.name} />
      </div>
    );
  }
}

export default Detail;
