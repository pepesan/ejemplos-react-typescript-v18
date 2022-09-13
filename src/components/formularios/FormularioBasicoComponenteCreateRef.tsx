import React, {Component, FormEvent, createRef} from 'react';

class FormularioBasicoComponenteCreateRef extends Component<any, any>{
    private myRef: React.RefObject<HTMLInputElement>;
    constructor(props: Readonly<any>) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.myRef = createRef();

    }

    handleChange(event: FormEvent) {
        //const name = (this.refs['name'] as any as HTMLInputElement).value.trim();
        console.log(event.target);
        const miTarget= event.target as HTMLInputElement;
        console.log(miTarget.value);
        console.log(this.myRef);
        this.setState({value: (this.myRef.current as HTMLInputElement).value});
        //this.setState({value: miTarget.value});
    }

    handleSubmit(event: FormEvent) {
        console.log('A name was submitted: ' + this.state.value);
        console.log(this.myRef.current);
        event.preventDefault();
    }
    render(): React.ReactElement{
        return (
            <div id="FormularioComponente">
                <h2>Formulario Básico Componente</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={this.state.value}
                            ref={this.myRef}
                            onChange={this.handleChange}
                        />
                        <p>el atributo ref permite hacer referencia al elemento desde el código react</p>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <label>{this.state.value}</label>
            </div>
        )
    }
}

export default FormularioBasicoComponenteCreateRef;
