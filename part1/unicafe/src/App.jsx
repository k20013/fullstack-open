import { useState } from 'react';

import Statistics from './components/statistics/statistics';

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>

      <h1>Give feedback</h1>

      <button onClick={() => setGood(good + 1)}>good</button>

      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>

      <button onClick={() => setBad(bad + 1)}>bad</button>

      <hr />

      {
        good || bad || neutral ?
          <Statistics good={good} neutral={neutral} bad={bad} />
        : "No feedback given"
      }      

    </div>
  )
}

export default App