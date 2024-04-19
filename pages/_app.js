import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "@/styles/globals.css";
const theme = createTheme({
  palette: {
    primary: {
      main: "##FFFFFF", // Change primary color if needed
    },
    secondary: {
      main: "#AE68FA", // Change secondary color to #AE68FA
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // Set button height to 48px
          height: "48px",
          // Adjust padding to maintain base text size
          padding: "6px 16px", // This keeps the text size base
          // Set text size for all button variants
          fontSize: "16px", // Base text size
        },
        sizeLarge: {
          // Override height of large button to 48px
          height: "48px",
          // Adjust padding to maintain base text size
          padding: "6px 16px", // This keeps the text size base
          // Set text size specifically for large button variant
          fontSize: "14px",
        },
      },
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
