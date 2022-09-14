// Paso 6: Define las acciones realizables y las Props

import {ADD_ARTICLE, MiAccion} from "./GlobalState";

export function addArticle(payload: string): MiAccion {
    return { type: ADD_ARTICLE, payload };
}
export interface MisProps {
    articles: string[],
    addArticle: (payload: string) => void
}
