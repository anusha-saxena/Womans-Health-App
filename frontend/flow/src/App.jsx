import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CalendarPage from "./components/CaldenderComponent";
import DashboardPage from "./pages/DashBoardPage";
import Header from "./components/Header";
import { CssBaseline, Box } from '@mui/material';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import customTheme from "./assets/CustomeTheme";
import { ThemeProvider } from "@mui/material/styles"; // <-- Add this import



function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Router>
          <Header />
          <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FFF0F6' }}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
          </Routes>
        </Box>
        </Router>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;