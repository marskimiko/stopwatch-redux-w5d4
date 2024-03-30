import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { START_TIMER, PAUSE_TIMER, RESET_TIMER, INCREMENT_TIME } from "./features/stopwatchReducer";
import "./stopwatch.css"; 

const Stopwatch = () => {
  const time = useSelector((state) => state.stopwatch.time);
  const isRunning = useSelector((state) => state.stopwatch.isRunning);
  const dispatch = useDispatch();
  const intervalIdRef = useRef()
  let intervalId;

  useEffect(() => {
    // let intervalId;
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        dispatch(INCREMENT_TIME());
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, []);

  const toggleRunning = () => {
    if (isRunning) {
      dispatch(PAUSE_TIMER());
    } else {
      dispatch(START_TIMER());
    }
  };

  const reset = () => {
    dispatch(RESET_TIMER());
  };

  const formatTimeUnit = (unit) => {
    return unit.toString().padStart(2, "0");
  };

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        {formatTimeUnit(hours)}:{formatTimeUnit(minutes)}:
        {formatTimeUnit(seconds)}:{formatTimeUnit(milliseconds)}
      </p>
      <div className="stopwatch-buttons">
        <button className="stopwatch-button" onClick={toggleRunning}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="stopwatch-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;