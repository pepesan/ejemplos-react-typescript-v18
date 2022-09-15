import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import Navega from "./Navega";


test('Navega render', async () => {
    render(<Navega />, {wrapper: BrowserRouter})
    // verify page content for the route
    expect(screen.getByText(/Navegación programática/i)).toBeInTheDocument()
    expect(screen.getByText("Navega")).toBeInTheDocument()
})

test('Navega render', async () => {
    render(<Navega />, {wrapper: BrowserRouter})
    // verify page content for the route
    const navegaButton = screen.getByText("Navega");
    expect(navegaButton).toBeInTheDocument()
    fireEvent.click(navegaButton)
    await waitFor(() => {
        expect(screen.findByText('Home Page')).toBeTruthy();
    });


})