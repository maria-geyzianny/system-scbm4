import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      position="fixed"
      bottom={0}
      width="100%"
      bgcolor="#b33d3d"
      p={[1, 2, 3]} // responsive padding
    >
      <Typography variant="body2" align="center" gutterBottom color="#FFFFFF">
        SAD SBSM4 | Departamento de Engenharia de Produção (DEP - UFPE) - (81)
        2126-7777 | Copyright © 2006-2024 - UFPE
      </Typography>
    </Box>
  );
};

export default Footer;
