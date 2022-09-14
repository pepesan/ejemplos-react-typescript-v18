// Paso 2: Reducer
// definición del reducer

// importación de las definiciones del Estado Global
import {ADD_ARTICLE, GlobalState, MiAccion} from "./GlobalState";

// Inicialización del Estado inicial
const initialState = {
    articles: []
};

// defición del reducer principal donde dependiendo del tipo de acción realiza una acción un otra
function rootReducer(state: GlobalState = initialState, action: MiAccion) {
    // elige el tipo de acción
    if (action.type === ADD_ARTICLE) {
        // devuelve un objeto donde introduce una nueva cadena al atributo articles mediante el payload (cadena nueva)
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    return state;
}
// exporta el reducer
export default rootReducer;
