import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/home/Index.jsx'
import Erro from './pages/error/erro.jsx';

export default function Navegar() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />


                <Route path='*' element={<Erro />} />
            </Routes>
        </BrowserRouter>
    );
}
