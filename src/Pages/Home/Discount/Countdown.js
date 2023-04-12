import React, { useState, useEffect } from 'react';

function Countdown() {
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 10,
    minutes: 0,
    seconds: 0,
  });
  const {hours, minutes,seconds}= timeRemaining

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => {
        const { hours, minutes, seconds } = prevTimeRemaining;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(intervalId);
          return prevTimeRemaining;
        }

        if (minutes === 0 && seconds === 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        }

        if (seconds === 0) {
          return { hours, minutes: minutes - 1, seconds: 59 };
        }

        return { hours, minutes, seconds: seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  
  <div className="flex flex-col px-4 py-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown flex justify-center font-mono text-5xl">
      <span style={{"--value":hours}}></span>
    </span>
    hours
  </div> 
  <div className="flex flex-col py-2 px-4 bg-neutral rounded-box text-neutral-content">
    <span className="countdown flex justify-center font-mono text-5xl">
      <span style={{"--value":minutes}}></span>
    </span>
    min
  </div> 
  <div className="flex flex-col  px-4 py-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown flex justify-center font-mono text-5xl">
      <span style={{"--value":seconds}}></span>
    </span>
    sec
  </div>
</div>
      {/* <h1>{timeRemaining.hours} hours, {timeRemaining.minutes} minutes, {timeRemaining.seconds} seconds</h1> */}
    </div>
  );
}

export default Countdown;
