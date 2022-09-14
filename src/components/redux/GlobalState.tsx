export interface GlobalState {
    articles: string []
}
export interface MiAccion {
    type: string,
    payload: string
}
export const ADD_ARTICLE = "ADD_ARTICLE";
