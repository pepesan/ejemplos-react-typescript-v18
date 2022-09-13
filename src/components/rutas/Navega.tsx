import React from 'react';
import {
    useParams,
    useNavigate,
    useLocation,
} from "react-router-dom";
function Navega () {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();

    function onclick() {
        console.log("navega");
        navigate("/");
    }

    return (
            <div>
                <h2>Navegación programática</h2>
                <p><button onClick={onclick}>Navega</button> </p>
            </div>

    )


}
export default Navega;