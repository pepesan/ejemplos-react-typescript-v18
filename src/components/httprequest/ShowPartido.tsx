import React, {Component} from 'react';
import Partido from "./Partido";

interface IPartido {
    partido: Partido
}
class  ShowPartido extends Component<IPartido>{
    render(): React.ReactElement{
        const partido =this.props.partido;
        const imgurl= "https://pactometro.cursosdedesarrollo.com/img/"+partido.imagen;
        const alt="Logotipo del "+ partido.nombre;
        return (
            <tr key={partido.nombre}>
                {/* eslint-disable-next-line jsx-a11y/scope */}
                <td  scope="row">{partido.nombre}</td> <td>{partido.dipu} escaños</td>
                <td><img src={imgurl} alt={alt}/></td>
            </tr>

        )
    }
}

export default ShowPartido;
