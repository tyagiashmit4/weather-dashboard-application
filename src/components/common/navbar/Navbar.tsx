import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
const CommonNavbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="navbar">
        <Toolbar sx={{ justifyContent: "center" }}>
          <IconButton
            size="large"
            edge="start"
            color={"inherit"}
            
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <WbSunnyIcon />
            <Typography variant="h6" sx={{ marginLeft: 2 }}>
              Weather Forecast
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CommonNavbar;
