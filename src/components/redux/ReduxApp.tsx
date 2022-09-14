// Paso 4: Uso del Store con un componente principal
import React from "react";
import List from "./List";
import Form from "./Form";
import {Provider} from "react-redux";
import store from "./store";
// El Provider define el entorno donde se podrá usar el store
const ReduxAPP = () => (
  <Provider store={store}>
    <div>
      <h2>Articles</h2>
      <List />
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form />
    </div>
  </Provider>
);

export default ReduxAPP;
