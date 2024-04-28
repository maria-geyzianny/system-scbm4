import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts/ThemeContext";

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();
  return (
    <Routes>
      <Route
        path="/cadastro-projetos"
        element={
          <Button variant="contained" color="primary" onClick={toggleTheme}>
            Alterando o tema
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/cadastro-projetos" />} />
    </Routes>
  );
};
