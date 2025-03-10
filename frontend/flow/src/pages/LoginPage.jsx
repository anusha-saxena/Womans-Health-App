import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      localStorage.setItem("user", username);
      navigate("/dashboard");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: "#FFEBF0", // Light pink background for login
        padding: "40px 20px",
        borderRadius: "16px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px", // Limit max width for the login box
        margin: "auto",
      }}
    >
      <Typography variant="h4" color="primary" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin="normal"
        sx={{
          '& .MuiInputLabel-root': {
            color: '#FF1493',
          },
        }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
        sx={{
          '& .MuiInputLabel-root': {
            color: '#FF1493',
          },
        }}
      />
      <Button onClick={handleLogin} variant="contained" color="primary" fullWidth sx={{ marginTop: "20px" }}>
        Log In
      </Button>
    </Box>
  );
}

export default LoginPage;
