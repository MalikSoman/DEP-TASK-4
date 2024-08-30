// src/reportWebVitals.js

import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

// Function to log or send web vital metrics to an analytics endpoint
const reportWebVitals = (metric) => {
  console.log(metric);
  // Example: Sending metrics to an analytics endpoint
  // You can replace this with your own analytics endpoint or service
  // fetch('https://your-analytics-endpoint.com/vitals', {
  //   method: 'POST',
  //   body: JSON.stringify(metric),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });
};

// Measure and report web vitals
onCLS(reportWebVitals);
onFID(reportWebVitals);
onFCP(reportWebVitals);
onLCP(reportWebVitals);
onTTFB(reportWebVitals);

export default reportWebVitals;
