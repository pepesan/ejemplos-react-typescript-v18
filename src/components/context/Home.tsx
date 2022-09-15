import React, {useContext} from "react";
import {LoginContext} from "./contexto";
import {DisplayLogin} from "./DisplayLogin";

export const Home = () => {
    const { loggedIn, setLoggedIn } = useContext(LoginContext)
    return (
        <div className='pageLayout'>
            <div>
                <h3>Home Page</h3>
            </div>
            {!loggedIn &&
                <DisplayLogin />
            }
            <div>
            </div>
        </div>
    )
}