import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserForm from "./pages/UserForm";
import { GlobalStyles } from "./styles/global";

const rootElement = document.getElementById("root");

render(
  <>
    <GlobalStyles />
    <Router>
      <Routes>
        <Route path="/cadastrar" element={<UserForm />} />
      </Routes>
    </Router>
  </>,
  rootElement
);
