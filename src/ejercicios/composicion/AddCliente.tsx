import React from 'react';
import {Cliente} from "./Cliente";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
interface Props {
    nuevoCliente: Cliente;
    onAdd: (cliente: Cliente) => void;
}

class AddCliente extends React.Component<Props> {
    static defaultProps = { // Definimos los valores por defecto
        cliente: {
            id: 1,
            nombre: "",
            dir: "",
            tlf: ""
        }

    };
    render() {
        return (
            <div >
                <h3>Formulario añadir cliente</h3>
                <Formik
                    initialValues={{
                        nombre: this.props.nuevoCliente.nombre,
                    }}
                    validationSchema={Yup.object().shape({
                        nombre: Yup.string()
                            .min(6, "Tiene que tener al menos 6 caracteres")
                            .required('Tiene que introducir un nombre, es obligatorio'),
                    })}
                    onSubmit={fields => {
                        let cliente = fields as Cliente;
                        this.props.onAdd(cliente);
                    }}>
                    {({ errors, status, touched }) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <Field name="nombre" type="text"
                                       className={'form-control' + (errors.nombre && touched.nombre ? ' is-invalid' : '')} />
                                <ErrorMessage name="nombre" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary mr-2">Add</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
}
export default AddCliente;