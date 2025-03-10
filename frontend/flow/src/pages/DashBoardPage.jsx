import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const [periodDates, setPeriodDates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedPeriodDates = JSON.parse(localStorage.getItem("periodDates")) || [];
    setPeriodDates(storedPeriodDates);
  }, []);

  const getNextPeriodDate = () => {
    if (periodDates.length === 0) return null;
    const lastPeriod = new Date(periodDates[periodDates.length - 1]);
    const nextPeriod = new Date(lastPeriod);
    nextPeriod.setMonth(lastPeriod.getMonth() + 1); // Assuming a monthly cycle
    return nextPeriod;
  };

  return (
    <Box sx={{ flex: 1, padding: "40px", backgroundColor: "#FCE4EC" }}>
      <Typography variant="h3" color="primary" align="center" gutterBottom>
        Your Dashboard
      </Typography>

      <Box display="flex" flexDirection="column" alignItems="center">
        <Paper sx={{ padding: "20px", backgroundColor: "#FFF0F6", width: "80%", maxWidth: "600px" }}>
          <Typography variant="h6" color="primary" gutterBottom>
            Saved Period Dates
          </Typography>
          {periodDates.length > 0 ? (
            periodDates.map((date, index) => (
              <Typography key={index} variant="body1" color="secondary" gutterBottom>
                {new Date(date).toLocaleDateString()}
              </Typography>
            ))
          ) : (
            <Typography variant="body1" color="textSecondary">
              No period dates saved yet.
            </Typography>
          )}
        </Paper>

        <Box mt={4} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h6" color="primary" gutterBottom>
            Next Expected Period
          </Typography>
          <Typography variant="body1" color="secondary" align="center">
            {getNextPeriodDate()
              ? getNextPeriodDate().toLocaleDateString()
              : "No period data available"}
          </Typography>
        </Box>

        <Box mt={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/calendar")}
            sx={{
              padding: "12px 40px",
              fontWeight: "bold",
              borderRadius: "30px",
              background: "#FFB6C1",
              '&:hover': {
                background: "#FF82AB",
              },
            }}
          >
            Go to Calendar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardPage;
