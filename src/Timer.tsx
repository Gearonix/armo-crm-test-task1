import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useFormat } from './hooks'

type Timeout = ReturnType<typeof setTimeout>

const Timer = () => {
  const [inputValue, setInputValue] = useState<string>()
  const [seconds, setSeconds] = useState<number>(0)
  const { toHours, toTimestamp, isOver } = useFormat()
  const timer = useRef<Timeout>()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const onStart = () => {
    const timeStamp = toTimestamp(inputValue)
    if (timeStamp === 0) {
      return
    }

    setSeconds(timeStamp)

    clearInterval(timer.current)
    timer.current = setInterval(() => {
      setSeconds((seconds) => {
        return seconds - 1000
      })
    }, 1000)
  }

  useEffect(() => {
    if (isOver(toHours(seconds))) {
      clearInterval(timer.current)
    }
  }, [seconds])

  return (
    <>
      <span>Входной формат - hh:mm:ss</span> <br />
      <input
        placeholder="hh:mm:ss"
        type="text"
        onChange={onChange}
        value={inputValue}
      />
      <button onClick={onStart}>Start</button>
      <br />
      <br />
      <span>{toHours(seconds)}</span>
    </>
  )
}

export default Timer
