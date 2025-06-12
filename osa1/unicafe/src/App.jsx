import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good / total) * 100

  if (total === 0) {
    return <p>Ei yhtään palautetta annettu</p>
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="hyvä" value={good} />
        <StatisticLine text="neutraali" value={neutral} />
        <StatisticLine text="huono" value={bad} />
        <StatisticLine text="yhteensä" value={total} />
        <StatisticLine text="keskiarvo" value={average.toFixed(1)} />
        <StatisticLine text="positiivisia" value={positive.toFixed(1) + ' %'} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Anna palautetta</h1>
      <Button handleClick={() => setGood(good + 1)} text="hyvä" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutraali" />
      <Button handleClick={() => setBad(bad + 1)} text="huono" />
      <h2>Statistiikka</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
