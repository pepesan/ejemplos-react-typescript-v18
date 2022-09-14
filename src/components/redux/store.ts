// Paso 3: Creación del Store

// importa el create store
import { createStore } from "redux";

// importa el reducer
import rootReducer from "./reducer";

// crea el store
const store = createStore(rootReducer);

// exporta el store
export default store;
