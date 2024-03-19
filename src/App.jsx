import { useState } from 'react'

import Button from "./components/Button"


const StatisticLine = ({text, value}) => {
  return(
   
      <div>
        {text} {value}
      </div>
    
  )
}

const Statistics = ({good, neutral, bad}) => {
  if(good == 0 && neutral == 0 && bad == 0) {
    return(
      <p>No feedback given</p>
    )
  }
  const all = good + neutral + bad
  const averageScore = (good * 1 + neutral * 0 + bad * (-1)) / all
  const positivePercentage = (good / all) * 100

  return (
    <div>
      <StatisticLine text = "good" value = {good} />
      <StatisticLine text = "neutral" value = {neutral} />
      <StatisticLine text = "bad" value = {bad} />
      <StatisticLine text = "all" value = {all} />
      <StatisticLine text = "average" value = {averageScore} />
      <StatisticLine text = "positive" value = {positivePercentage} />
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
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App