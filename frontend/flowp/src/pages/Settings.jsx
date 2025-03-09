import React, { useState } from "react";
import { Switch, Typography, Card } from "@mui/material";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);

  return (
    <div style={styles.page}>
      <Typography variant="h4" sx={styles.header}>Settings</Typography>
      
      <Card sx={styles.card}>
        <Typography variant="h6">Enable Notifications</Typography>
        <Switch checked={notifications} onChange={() => setNotifications(!notifications)} />
      </Card>
    </div>
  );
};

const styles = {
  page: {
    padding: "80px 20px",
    backgroundColor: "#8F8A93",
    minHeight: "100vh",
    color: "white",
    textAlign: "center",
  },
  header: {
    marginBottom: "20px",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "10px",
  },
};

export default Settings;
