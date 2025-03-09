import React, { useState } from "react";
import { format, addDays, subDays } from "date-fns";
import { Card, IconButton, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div style={styles.page}>
      <Typography variant="h4" sx={styles.header}>Cycle Calendar</Typography>
      
      <Card sx={styles.card}>
        <IconButton onClick={() => setSelectedDate(subDays(selectedDate, 1))}>
          <ArrowBack />
        </IconButton>
        
        <Typography variant="h6">{format(selectedDate, "MMMM dd, yyyy")}</Typography>
        
        <IconButton onClick={() => setSelectedDate(addDays(selectedDate, 1))}>
          <ArrowForward />
        </IconButton>
      </Card>
    </div>
  );
};

const styles = {
  page: {
    padding: "80px 20px",
    backgroundColor: "#E58EAA",
    minHeight: "100vh",
    color: "#615C62",
    textAlign: "center",
  },
  header: {
    marginBottom: "20px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
};

export default Calendar;
