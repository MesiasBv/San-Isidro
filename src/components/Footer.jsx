import React from "react";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", p: 2, mt: 4, textAlign: "center" }}>
      <Typography variant="body2">© 2024 Big Data Dashboard. Todos los derechos reservados.</Typography>
    </Box>
  );
};

export default Footer;
