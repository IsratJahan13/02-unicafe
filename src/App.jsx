import { useState } from 'react'

import Button from "./components/Button"

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const averageScore = (good * 1 + neutral * 0 + bad * (-1)) / all
  const positivePercentage = (good / all) * 100

  return (
    <div>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {averageScore}</p>
      <p>positive {positivePercentage}%</p>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text = 'Good' />
      <Button handleClick={handleNeutralClick} text = 'Neutral' />
      <Button handleClick={handleBadClick} text = 'Bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App