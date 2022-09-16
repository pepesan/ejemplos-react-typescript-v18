import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import {About} from "./Pages";



test('About render', async () => {
    render(<About />, {wrapper: BrowserRouter})
    // verify page content for the route
    expect(screen.getByText("About Page")).toBeInTheDocument()
})
