import React, { useState, useEffect } from 'react';

function TimerUp({ targetRange, start }) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer === targetRange) {
        clearInterval(intervalId);
      } else {
        setTimer(prevTimer => prevTimer + 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetRange]);

  function formatSecondsToTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }

  return (
    <div>
      <p>{start ? formatSecondsToTime(timer) : "0:00"}</p>
    </div>
  );
}

export default TimerUp;
