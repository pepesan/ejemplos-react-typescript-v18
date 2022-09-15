import React, {useState} from 'react';

import {LoginContext} from "./contexto";
import {Login} from "./Login";
import {Home} from "./Home";



function MiContenedor() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false)

    return (
        <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
            <Login />
            <Home />
        </LoginContext.Provider>
    );
}

export default MiContenedor;