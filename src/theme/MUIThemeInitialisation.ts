import { createTheme, Theme } from "@mui/material";

export function initializeDarkTheme(): Theme {
    return createTheme({
      palette: {
        mode: 'dark'
      },
    });
  }