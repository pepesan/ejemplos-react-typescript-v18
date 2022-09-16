import React from 'react';
import {fireEvent, queryByAttribute, render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

import FormularioBasicoComponenteCreateRef from "./FormularioBasicoComponenteCreateRef";
import Listado from "../rutas/Listado";

const getById = queryByAttribute.bind(null, 'id');

test('About render', async () => {
    render(<FormularioBasicoComponenteCreateRef />, {wrapper: BrowserRouter})
    // verify page content for the route
    expect(screen.getByText("Formulario Básico Componente")).toBeInTheDocument()
})

test('Listado type input render content', async () => {
    const {container } = render(<FormularioBasicoComponenteCreateRef />, {wrapper: BrowserRouter})
    const items = container.getElementsByClassName("text-input");
    // console.log(items.length);
    // console.log(items[0]);
    // verify page content for the route
    expect(items.length).toBe(1);
    fireEvent.change(items[0], {target: {value: "hola"}})
    //expect(items[0]).toHaveClass("list-item");
    const labels = container.getElementsByClassName("text-label");
    expect(labels.length).toBe(1);
    expect(labels[0].innerHTML).toBe("hola");
});
