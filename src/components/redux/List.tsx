// Paso 7: Componente de Listado
import React, {Component} from "react";
import { connect } from "react-redux";
import {GlobalState} from "./GlobalState";
// importa la acción a realizar
import {addArticle, clearArticle, MisProps} from "./action";

// mapea a props el estado
const mapStateToProps = (state: GlobalState) => {
  return {
    articles: state.articles,
    addArticle: addArticle,
    clearArticle: clearArticle
  };
};

class ConnectedList extends Component<MisProps>{
  // presenta los artículos del listado
  render() {
    return (
      <ul>
        {this.props.articles.map(el => (
          <li key={el+"1"}>{el}</li>
        ))}
      </ul>
    );
  }
}

// conecta el componente con la función que conecta las props al estado
const List = connect(mapStateToProps)(ConnectedList);

export default List;
