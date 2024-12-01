import React from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";

const Sidebar = ({ onSelectPage }) => {
  const pages = ["Home", "Acerca de", "Dashboard"];

  return (
    <Box sx={{ width: 250, bgcolor: "background.paper", p: 2 }}>
      <List>
        {pages.map((page) => (
          <ListItem button key={page} onClick={() => onSelectPage(page)}>
            <ListItemText primary={page} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
