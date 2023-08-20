import './Content.css'
import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "../../views/examples/Home";
import { About } from '../../views/examples/About';
import Param from '../../views/examples/Param';

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/"          element={<Home />} />
            <Route path="/param/:id" element={<Param/>} />
            <Route path="/about"     element={<About />} />
        </Routes>
    </main>
)

export default Content;