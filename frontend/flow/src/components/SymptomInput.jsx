import React from "react";
import { format } from "date-fns";

const SymptomInput = ({
  date,
  symptoms,
  selectedSymptomsList,
  setSelectedSymptomsList,
  commonSymptoms,
  saveSymptom,
  markPeriodDays,
}) => {
  const handleSymptomSelect = (symptom) => {
    if (!selectedSymptomsList.includes(symptom)) {
      setSelectedSymptomsList([...selectedSymptomsList, symptom]);
    }
  };

  const handleRemoveSymptom = (symptom) => {
    setSelectedSymptomsList(selectedSymptomsList.filter((s) => s !== symptom));
  };

  return (
    <div className="symptom-input">
      <h2>Enter Symptoms for {format(date, "MMMM dd, yyyy")}</h2>
      
      <div className="symptom-list">
        {commonSymptoms.map((symptom, index) => (
          <button
            key={index}
            className={`symptom-option ${
              selectedSymptomsList.includes(symptom) ? "selected" : ""
            }`}
            onClick={() =>
              selectedSymptomsList.includes(symptom)
                ? handleRemoveSymptom(symptom)
                : handleSymptomSelect(symptom)
            }
          >
            {symptom}
          </button>
        ))}
      </div>

      <div className="buttons">
        <button className="symptom-btn" onClick={saveSymptom}>
          Save Symptoms
        </button>
        <button className="period-btn" onClick={markPeriodDays}>
          Mark as Period Day
        </button>
      </div>
    </div>
  );
};

export default SymptomInput;
