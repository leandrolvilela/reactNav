import Content from '../components/layout/Content';
import Menu from '../components/layout/Menu';
import './App.css'
import React from "react";

const App = props => (
    <div className="App">
        <Menu />
        <Content/>
    </div>
)

export default App