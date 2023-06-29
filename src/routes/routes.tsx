import { Home, Patient, Record } from "components/pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Consultas" element={<Record />} />
        <Route path="/Pacientes" element={<Patient />} />
      </Routes>
    </BrowserRouter>
  );
};
