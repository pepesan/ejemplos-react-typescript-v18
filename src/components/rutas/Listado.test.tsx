import React from 'react';
import {fireEvent, getNodeText, render, screen, waitFor, queryByAttribute} from '@testing-library/react'
import '@testing-library/jest-dom'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import Listado from "./Listado";

const getById = queryByAttribute.bind(null, 'id');

test('Listado render', async () => {
    render(<Listado />, {wrapper: BrowserRouter})
    // verify page content for the route
    expect(screen.getByText("Listado")).toBeInTheDocument()
    expect(screen.getByText("Hola")).toBeInTheDocument()
    expect(screen.getByText("Adios")).toBeInTheDocument()
})

test('Listado render 2 list items', async () => {
    const {container } = render(<Listado />, {wrapper: BrowserRouter})
    const items = container.getElementsByClassName("list-item");
    // console.log(items.length);
    // console.log(items[0]);
    // verify page content for the route
    expect(items.length).toBe(2);
    expect(items[0]).toHaveClass("list-item");
});

test('Listado render list element', async () => {
    const {container } = render(<Listado />, {wrapper: BrowserRouter})
    const listItem = getById(container, 'list-element');
    // @ts-ignore
    expect(listItem.id).toBe("list-element");;
});

test('Listado render first item', async () => {
    const {container } = render(<Listado />, {wrapper: BrowserRouter})
    const links = container.querySelectorAll("ul li a")
    const firstElement = links[0] as HTMLLinkElement;
    expect(firstElement.href).toBe("http://localhost/listado/Hola");
    expect(firstElement.innerHTML).toBe("Hola");
});
