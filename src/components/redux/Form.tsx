// Paso 8: Componente de Formulario
import React, {ChangeEvent, Component, EventHandler, FormEvent, FormEventHandler} from "react";
import { connect } from "react-redux";
// importa el dispatcher (pasa llamar a los métodos del store)
import {Dispatch} from "redux";
// importa las acciones
import {addArticle, MisProps} from "./action";

// función que mapea el dispatch a props
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addArticle: (article: string) => dispatch(addArticle(article)),
    articles: []
  };
}
interface Cadena {
  title: string
}

// Típico componente de Formulario
class ConnectedForm extends Component<MisProps, Cadena> {
  constructor(props: MisProps) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ title: event.target.value });
  }
  // Gestión del Submit del formulario
  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // uso de la prop para enviar los datos al estado
    this.props.addArticle(this.state.title);
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

// Conexión del Componente con la función de Mapeo
const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
