import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts/ThemeContext";
import Formulario from "../shared/components/forms";
import ProjectPage from "../shared/components/formsPrioridades";

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();
  return (
    <Routes>
      <Route
        path="/cadastro-projetos"
        element={
          <div style={{ justifyContent: "flex-end" }}>
            <div style={{ marginLeft: "auto" }}>
              {/* <Button variant="contained" color="primary" onClick={toggleTheme}>
                Alterando o tema
              </Button> */}
              <ProjectPage />
            </div>
          </div>
        }
      />

      <Route path="/formulario" element={<Formulario />} />

      <Route path="*" element={<Navigate to="/cadastro-projetos" />} />
    </Routes>
  );
};
