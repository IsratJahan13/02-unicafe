import { useState } from 'react'

import Button from "./components/Button"

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

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


    </div>
  )
}

export default App