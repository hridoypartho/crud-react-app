import React from "react";
import Create from "./components/Create";
import Read from "./components/Read";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Create />} />
        <Route exact path="/read" element={<Read />} />
      </Routes>
    </Router>
  );
};

export default App;
