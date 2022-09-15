import { useContext } from 'react'
import {LoginContext} from "./contexto";
import {DisplayLogin} from "./DisplayLogin";


export const Login = () => {
    const { loggedIn, setLoggedIn } = useContext(LoginContext)

    return (
        <>
            <div className="pageLayout">
                <div>
                    <h3>Login</h3>
                </div>{!loggedIn &&
                <DisplayLogin />
            }
                <div>
                    <button onClick={() => setLoggedIn(!loggedIn)}>Login</button>
                </div>
            </div>
        </>
    );
};