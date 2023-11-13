import React, { useState, useEffect } from 'react';

function RoomLog() {
  const [log, setLog] = useState([]);
  const maxLines = 3;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLog((prevLog) => {
        const newLog = [`Usuário ${new Date().getTime()} entrou na sala`, ...prevLog];
        if (newLog.length > maxLines) {
          newLog.pop(); // Remove a linha mais antiga
        }
        return newLog;
      });
    }, 8000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      {log.map((entry, index) => (
        <p key={index}>{entry}</p>
      ))}
    </div>
  );
}

export default RoomLog;