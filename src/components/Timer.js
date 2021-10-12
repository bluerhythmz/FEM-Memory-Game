import { useState, useEffect } from 'react'

const Timer = () => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  let secondsOutput = seconds < 10 ? `0${seconds}` : seconds 
  let minutesOutput = minutes < 10 ? `0${minutes}` : minutes 
  let timer = `${minutesOutput}:${secondsOutput}`

  useEffect(() => {
    const timerStart = setTimeout(() => {
        if (seconds === 59) {
          setSeconds(0)
          setMinutes(minute => minute + 1)
        } else {
          setSeconds(second => second + 1)
        }
        
    }, 1000)

    return () => {
      clearTimeout(timerStart)
    }
  }, [seconds])

  return (
    <>
      {timer}
    </>
  )
}

export default Timer
