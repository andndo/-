import React from "react";
import "./App.css";
import Main from "./pages/Main";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import EmploymentBoard from "./pages/EmploymentBoard";
import WorkerBoard from "./pages/WorkerBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/employmentBoard" element={<EmploymentBoard />} />
        <Route path="/workerBoard" element={<WorkerBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
