import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
      style={styles.page}
    >
      <Typography variant="h4" sx={styles.header}>Your Cycle Overview</Typography>
      
      <Card sx={styles.card}>
        <CardContent>
          <Typography variant="h6">Next Period</Typography>
          <Typography variant="body1">March 25</Typography>
        </CardContent>
      </Card>

      <Card sx={styles.card}>
        <CardContent>
          <Typography variant="h6">Cycle Length</Typography>
          <Typography variant="body1">28 Days</Typography>
        </CardContent>
      </Card>

      <Card sx={styles.card}>
        <CardContent>
          <Typography variant="h6">Symptoms Logged</Typography>
          <Typography variant="body1">Mild cramps</Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const styles = {
  page: {
    padding: "80px 20px",
    backgroundColor: "#F6BFC6",
    minHeight: "100vh",
    color: "#615C62",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "white",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
};

export default Home;
