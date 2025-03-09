import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const data = [
  { name: "Jan", cycle: 28 },
  { name: "Feb", cycle: 27 },
  { name: "Mar", cycle: 29 },
];

const Stats = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
      style={styles.page}
    >
      <Typography variant="h4" sx={styles.header}>Cycle Statistics</Typography>
      
      <ResponsiveContainer width="90%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="cycle" stroke="#D96A9E" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

const styles = {
  page: {
    padding: "80px 20px",
    backgroundColor: "#F6BFC6",
    minHeight: "100vh",
    color: "#615C62",
    textAlign: "center",
  },
  header: {
    marginBottom: "20px",
  },
};

export default Stats;
