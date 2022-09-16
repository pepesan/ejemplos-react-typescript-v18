// Paso 2: Reducer
// definición del reducer

// importación de las definiciones del Estado Global
import {ADD_ARTICLE, CLEAR_ARTICLE, GlobalState, MiAccion} from "./GlobalState";

// Inicialización del Estado inicial
const initialState = {
    articles: []
};

// defición del reducer principal donde dependiendo del tipo de acción realiza una acción un otra
function rootReducer(state: GlobalState = initialState, action: MiAccion) {
    // console.log(action);
    // elige el tipo de acción
    if (action.type === ADD_ARTICLE) {
        // devuelve un objeto donde introduce una nueva cadena al atributo articles mediante el payload (cadena nueva)
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    if (action.type === CLEAR_ARTICLE) {
        // limpia el array de datos en el estado

        return Object.assign({}, state, {
            articles: []
        });
    }
    return state;
}
// exporta el reducer
export default rootReducer;
