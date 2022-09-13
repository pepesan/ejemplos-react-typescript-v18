import React, {useState, useEffect} from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import {Slider} from "primereact/slider";

function PrimeReactDemo (){
    const [value, setValue] = useState(0);
        return (
            <div className="prime-react-demo">
                <h2>Demo Prime React</h2>
                <div className="card">
                    <h5>Basic: {value}</h5>
                    <Slider value={value} onChange={(e) => {
                        const valor = e.value as number;
                        setValue(valor);
                    }} />
                </div>
            </div>
        );

}
export default PrimeReactDemo;