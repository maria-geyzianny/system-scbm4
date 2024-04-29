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
              sx={{ height: theme.spacing(18), width: theme.spacing(12) }}
              variant="square"
              alt="Logo da UFPE"
              src="https://upload.wikimedia.org/wikipedia/commons/8/85/Bras%C3%A3o_da_UFPE.png"
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
              <ListItemButton>
                <ListItemIcon>
                  <Icon>addchart</Icon>
                </ListItemIcon>
                <ListItemText primary="Cadastrar Projeto" />
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
