import React, { useState, useEffect } from "react";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box, Button, Typography, Paper } from "@mui/material";

function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [periodDates, setPeriodDates] = useState([]);

  useEffect(() => {
    const storedPeriodDates = JSON.parse(localStorage.getItem("periodDates")) || [];
    setPeriodDates(storedPeriodDates);
  }, []);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleSavePeriod = () => {
    if (selectedDate) {
      const updatedPeriodDates = [...periodDates, selectedDate];
      setPeriodDates(updatedPeriodDates);
      localStorage.setItem("periodDates", JSON.stringify(updatedPeriodDates));
      alert("Your period date has been saved!");
    }
  };

  return (
    <Box sx={{ flex: 1, padding: "40px", backgroundColor: "#FCE4EC" }}>
      <Typography variant="h4" gutterBottom color="primary" align="center">
        Select Your Period Date
      </Typography>
      <Box display="flex" justifyContent="center">
        <DateCalendar
          value={selectedDate}
          onChange={handleDateChange}
          sx={{
            borderRadius: "10px",
            backgroundColor: "#FFEBF0",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        />
      </Box>

      <Box mt={2} display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          onClick={handleSavePeriod}
          sx={{
            padding: "12px 40px",
            fontWeight: "bold",
            borderRadius: "30px",
            background: "#FFB6C1", // Light pink
            '&:hover': {
              background: "#FF82AB", // Soft hover effect
            },
          }}
        >
          Save Period Date
        </Button>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" color="primary" gutterBottom>
          Saved Period Dates
        </Typography>
        <Paper sx={{ padding: "20px", backgroundColor: "#FFF0F6" }}>
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
      </Box>
    </Box>
  );
}

export default CalendarPage;
