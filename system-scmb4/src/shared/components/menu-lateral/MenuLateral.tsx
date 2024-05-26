import { Height } from "@mui/icons-material";
import Footer from "../footer";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  useTheme,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Icon,
} from "@mui/material";

import { Link } from "react-router-dom";

export const MenuLateral: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const theme = useTheme();
  return (
    <>
      <Drawer variant="permanent">
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(30)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(18), width: theme.spacing(25) }}
              variant="square"
              alt="Logo da UFPE"
              src="../logoufpe.png"
            ></Avatar>
          </Box>

          <Divider sx={{ mb: 5 }} />
          <Box flex={1}>
            <List component="nav">
              <ListItemButton sx={{ mb: 2 }}>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Página Inicial" />
              </ListItemButton>

              <ListItemButton sx={{ mb: 2 }}>
                <ListItemIcon>
                  <Icon>people</Icon>
                </ListItemIcon>
                <ListItemText primary="Cadastrar Gerente" />
              </ListItemButton>

              <Box
                component={Link}
                to="formulario"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": {
                    textDecoration: "none",
                  },
                  "&:focus": {
                    textDecoration: "none",
                  },
                }}
              >
                <ListItemButton sx={{ mb: 2 }}>
                  <ListItemIcon>
                    <Icon>addchart</Icon>
                  </ListItemIcon>
                  <ListItemText primary="Cadastrar Projeto" />
                </ListItemButton>
              </Box>

              <Box
                component={Link}
                to="/formsPrioridades"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": {
                    textDecoration: "none",
                  },
                  "&:focus": {
                    textDecoration: "none",
                  },
                }}
              >
                <ListItemButton sx={{ mb: 2 }}>
                  <ListItemIcon>
                    <Icon>checklist</Icon>
                  </ListItemIcon>
                  <ListItemText primary="Elencar Prioridades" />
                </ListItemButton>
              </Box>

              <ListItemButton sx={{ mb: 2 }}>
                <ListItemIcon>
                  <Icon>assessment</Icon>
                </ListItemIcon>
                <ListItemText primary="Resultados" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
      <Footer />
    </>
  );
};
