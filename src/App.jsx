import { useState } from 'react'

import Button from "./components/Button"

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [total, setTotal] = useState(0)
  

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
    
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(updatedNeutral + good + bad)
    
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(updatedBad + good + neutral)
    
  }

  // const Statistics = ({good, neutral, bad}) => {

  // }
  const all = good + neutral + bad
  const averageScore = (good * 1 + neutral * 0 + bad * (-1)) / all
  const positivePercentage = (good / all) * 100

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text = 'Good' />
      <Button handleClick={handleNeutralClick} text = 'Neutral' />
      <Button handleClick={handleBadClick} text = 'Bad' />
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {averageScore}</p>
      <p>positive {positivePercentage}%</p>


    </div>
  )
}

export default App