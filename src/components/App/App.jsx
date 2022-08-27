import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Chart1 } from "../../pages/Chart1";
import { Chart2 } from "../../pages/Chart2";

import "./App.pcss";

const Header = () => (
  <header>
    <nav>
        <Link to="/">Chart 1</Link>
        <Link to="/chart2">Chart 2</Link>
    </nav>
  </header>
)

const Main = () => (
  <main>
    <Routes>
      <Route exact path="/" element={<Chart1/>}/>
      <Route exact path="/chart2" element={<Chart2/>}/>
    </Routes>
  </main>
)

const App = () => {
    return (
      <BrowserRouter>
        <Header/>
        <Main/>
      </BrowserRouter>
    );
}

export default App; 
