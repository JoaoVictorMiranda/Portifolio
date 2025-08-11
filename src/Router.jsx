import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Index from './pages/Index'

export default function Navegar() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />

            </Routes>
        </BrowserRouter>
    )
}
