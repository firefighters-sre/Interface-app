// MetricsDisplay.jsx

import React from 'react';

const MetricsDisplay = ({ isVisible, metrics }) => {
  if (!isVisible) return null;

  return (
    <div className="metricas">
      {metrics.map(metric => (
        <div className="valor-box" key={metric.label}>
          <span>{metric.label}: {metric.value}</span>
        </div>
      ))}
    </div>
  );
};

export default MetricsDisplay;
