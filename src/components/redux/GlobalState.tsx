// Paso 1: Definiciones del Estado

// definición del store Glocal
export interface GlobalState {
    articles: string []
}
// definición de la acción
export interface MiAccion {
    // tipo de acción
    type: string,
    // datos a recibir por parte de la acción
    payload: string
}
// definición de un tipo de acción
export const ADD_ARTICLE = "ADD_ARTICLE";
export const CLEAR_ARTICLE = "CLEAR_ARTICLE";
