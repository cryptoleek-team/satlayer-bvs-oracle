import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PriceDisplay from './components/PriceDisplay';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/task/:taskId" element={<PriceDisplay />} />
                <Route path="/" element={<PriceDisplay />} /> {/* Default route */}
            </Routes>
        </BrowserRouter>
    );
}

export default App; 