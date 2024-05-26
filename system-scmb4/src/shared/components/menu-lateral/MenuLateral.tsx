import { Height } from "@mui/icons-material";
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

          <Divider />
          <Box flex={1}>
            <List component="nav">
              {/* Página Inicial */}
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Página Inicial" />
              </ListItemButton>
              {/* Avaliação*/}
              <ListItemButton>
                <ListItemIcon>
                  <Icon>people</Icon>
                </ListItemIcon>
                <ListItemText primary="Cadastrar Gerente" />
              </ListItemButton>
              {/* add projeto  */}
              <Link to="formulario">
                <ListItemButton>
                  <ListItemIcon>
                    <Icon>addchart</Icon>
                  </ListItemIcon>
                  <ListItemText primary="Cadastrar Projeto" />
                </ListItemButton>
              </Link>
              {/* add prioridades  */}
              <ListItemButton>
                <ListItemIcon>
                  <Icon>checklist</Icon>
                </ListItemIcon>
                <ListItemText primary="Elencar Prioridades" />
              </ListItemButton>
              {/* Resultados */}
              <ListItemButton>
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
    </>
  );
};
