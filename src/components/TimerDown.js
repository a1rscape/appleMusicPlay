import React, { useState, useEffect } from 'react';

function Timer({ targetTime, start }) {
  const [timer, setTimer] = useState(parseTimeToSeconds(targetTime));
  let intervalId; // Declare intervalId here

  useEffect(() => {
    intervalId = setInterval(() => { // Assign intervalId here
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clearInterval(intervalId);
    }
  }, [timer, intervalId]); // Include intervalId in the dependency array

  function parseTimeToSeconds(time) {
    const [minutes, seconds] = time.split(':').map(Number);
    return minutes * 60 + seconds;
  }

  function formatSecondsToTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `-${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }

  return (
    <div>
      <p>{start ? formatSecondsToTime(timer) : targetTime}</p>
    </div>
  );
}

export default Timer;
