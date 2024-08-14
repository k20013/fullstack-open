import { useState } from 'react';

import Statistics from './components/statistics/statistics';
import Button from './components/button/button';

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>

      <h1>Give feedback</h1>

      <Button callback={() => setGood(good + 1)} value={"good"} />
      <Button callback={() => setNeutral(neutral + 1)} value={"neutral"} />
      <Button callback={() => setBad(bad + 1)} value={"bad"} />

      <h2>Statistics</h2>

      {
        good || bad || neutral ?
          <Statistics good={good} neutral={neutral} bad={bad} />
          : "No feedback given"
      }

    </div>
  )
}

export default App