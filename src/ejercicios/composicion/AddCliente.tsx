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
                        id: this.props.nuevoCliente.id,
                        nombre: this.props.nuevoCliente.nombre,
                        dir: this.props.nuevoCliente.dir,
                        tlf: this.props.nuevoCliente.tlf,
                    }}
                    validationSchema={Yup.object().shape({
                        nombre: Yup.string()
                            .min(6, "Tiene que tener al menos 6 caracteres")
                            .required('Tiene que introducir un nombre, es obligatorio'),
                        id: Yup.number()
                            .required('Tiene que introducir un id, es obligatorio'),
                    })}
                    onSubmit={fields => {
                        let cliente = fields as Cliente;
                        this.props.onAdd(cliente);
                    }}>
                    {({ errors, status, touched }) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="id" className="form-label">ID</label>
                                <Field name="id" type="text"
                                       className={'form-control' + (errors.id && touched.id ? ' is-invalid' : '')} />
                                <ErrorMessage name="id" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <Field name="nombre" type="text"
                                       className={'form-control' + (errors.nombre && touched.nombre ? ' is-invalid' : '')} />
                                <ErrorMessage name="nombre" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dir" className="form-label">Dirección</label>
                                <Field name="dir" type="text"
                                       className={'form-control' + (errors.dir && touched.dir ? ' is-invalid' : '')} />
                                <ErrorMessage name="dir" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tlf" className="form-label">Teléfono</label>
                                <Field name="tlf" type="text"
                                       className={'form-control' + (errors.tlf && touched.tlf ? ' is-invalid' : '')} />
                                <ErrorMessage name="tlf" component="div" className="invalid-feedback" />
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