import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Home, CalendarToday, BarChart, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <BottomNavigation sx={styles.navbar}>
      <Link to="/" style={styles.link}><BottomNavigationAction label="Home" icon={<Home />} /></Link>
      <Link to="/calendar" style={styles.link}><BottomNavigationAction label="Calendar" icon={<CalendarToday />} /></Link>
      <Link to="/stats" style={styles.link}><BottomNavigationAction label="Stats" icon={<BarChart />} /></Link>
      <Link to="/settings" style={styles.link}><BottomNavigationAction label="Settings" icon={<Settings />} /></Link>
    </BottomNavigation>
  );
};

const styles = {
  navbar: {
    position: "fixed",
    bottom: 0,
   
    left: 0,
    width: "100%",
    backgroundColor: "#D96A9E",
    display: "flex",
    justifyContent: "space-around",
    padding: "10px 0",
    boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
};

export default Navbar;
