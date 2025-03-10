import React from "react";
import { format } from "date-fns";

const SymptomList = ({ symptoms }) => {
  return (
    <div className="symptom-list-container">
      <h2>Symptoms Overview</h2>
      {Object.keys(symptoms).map((key) => (
        <div key={key} className="symptom-item">
          <strong>{format(new Date(key), "MMMM dd, yyyy")}:</strong> {symptoms[key]}
        </div>
      ))}
    </div>
  );
};

export default SymptomList;
