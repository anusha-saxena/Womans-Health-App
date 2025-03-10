import React, { useState } from "react";
import { Box, Button, Chip } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { format } from "date-fns";

function CalendarPage() {
  const [date, setDate] = useState(new Date());
  const [symptoms, setSymptoms] = useState({});
  const [selectedSymptomsList, setSelectedSymptomsList] = useState([]);

  const commonSymptoms = [
    "Cramps", "Fatigue", "Mood Swings", "Headache", "Back Pain", "Bloating", "Acne", "Nausea",
  ];

  const handleDateChange = (newDate) => {
    setDate(newDate);
    const formattedDate = format(newDate, "yyyy-MM-dd");
    setSelectedSymptomsList(symptoms[formattedDate] || []);
  };

  const handleSymptomSelect = (symptom) => {
    if (!selectedSymptomsList.includes(symptom)) {
      setSelectedSymptomsList([...selectedSymptomsList, symptom]);
    }
  };

  const handleRemoveSymptom = (symptom) => {
    setSelectedSymptomsList(selectedSymptomsList.filter((s) => s !== symptom));
  };

  const saveSymptom = () => {
    const formattedDate = format(date, "yyyy-MM-dd");
    setSymptoms({ ...symptoms, [formattedDate]: selectedSymptomsList });
    setSelectedSymptomsList([]); // Reset selected symptoms after saving
  };

  return (
    <Box mt={5}>
      <h2>Calendar</h2>
      <Box display="flex" justifyContent="space-between">
        <Box sx={{ width: "45%" }}>
          <DateCalendar value={date} onChange={handleDateChange} sx={{ boxShadow: 2 }} />
        </Box>
        <Box sx={{ width: "45%" }}>
          <h3>Symptoms for {format(date, "MMMM dd, yyyy")}</h3>
          <Box display="flex" flexWrap="wrap" gap={1} mb={3}>
            {commonSymptoms.map((symptom) => (
              <Button
                key={symptom}
                variant="outlined"
                color={selectedSymptomsList.includes(symptom) ? "secondary" : "primary"}
                onClick={() =>
                  selectedSymptomsList.includes(symptom)
                    ? handleRemoveSymptom(symptom)
                    : handleSymptomSelect(symptom)
                }
              >
                {symptom}
              </Button>
            ))}
          </Box>
          <Button variant="contained" color="primary" onClick={saveSymptom}>
            Save Symptoms
          </Button>
        </Box>
      </Box>

      <Box mt={5}>
        <h3>Symptoms Overview</h3>
        {Object.keys(symptoms).map((key) => (
          <Box key={key} mb={2}>
            <strong>{format(new Date(key), "MMMM dd, yyyy")}:</strong>
            <Box display="flex" gap={1} mt={1}>
              {symptoms[key].map((symptom) => (
                <Chip key={symptom} label={symptom} color="primary" />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default CalendarPage;
