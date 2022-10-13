import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import UserForm from "./pages/UserForm";
import UserLogin from "./pages/UserLogin";
import Home from "./pages/Home";
import { GlobalStyles } from "./styles/global";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";

const rootElement = document.getElementById("root");

render(
  <>
    <GlobalStyles />
    <Router >
      <Routes >
        <Route path="/cadastrar" element={<UserForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Navigate to="/cadastrar" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  </>,
  rootElement
);
