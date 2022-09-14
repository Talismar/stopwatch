import React, {useState} from "react";
import style from "./style.module.css"

const Main = () => {

  const [minute, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [miliseconds, setMiliseconds] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const start = () => {
    if (intervalId == 0) {
      const newIntervalId = setInterval(() => {

        setMiliseconds(prevMilis => 
          prevMilis + 1
        );
  
      }, 16,666666667);
      setIntervalId(newIntervalId);
    }
  }

  const stop = () => {
    if (intervalId != 0) {
      clearInterval(intervalId)
      setIntervalId(0)
    }
  }

  const print_miliseconds = () => {

    if (miliseconds <= 9) {
      return "0" + miliseconds.toString()
    }

    else if (miliseconds == 60){
      if (seconds == 59){
        setMinutes(preveMinute => preveMinute + 1)
  
        setSeconds(0)
        setMiliseconds(0)
      }
      else {
        setSeconds(prevSecond => prevSecond + 1)

        setMiliseconds(0)
      }
    }

    return miliseconds
  }

  function resetStates () {
    setMinutes(0)
    setSeconds(0)
    setMiliseconds(0)
    clearInterval(intervalId);
    setIntervalId(0);
  }
 
  return (
    <main className={style.main}>
        <p>
          {minute == 0 ? "" : minute <= 9 ? "0" + minute.toString() + ":" : minute + ":"}
          {seconds <= 9 ? "0"+seconds.toString() : seconds}
          :{print_miliseconds()}
        </p>

      <div className={style.Btns}>
      
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={resetStates}>Reset</button>

      </div>

    </main>
  )
}

export default Main;