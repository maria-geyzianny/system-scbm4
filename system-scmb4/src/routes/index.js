import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/cadastro-projetos"
        element={<p> Página de Cadastro de Projetos</p>}
      />
      <Route path="*" element={<Navigate to="/cadastro-projetos" />} />
    </Routes>
  );
};
