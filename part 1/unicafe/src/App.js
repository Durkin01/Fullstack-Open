import { useState } from 'react'

const Button = ({ onClick, text }) => ( 
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => { 

  function calculateAverage() {
    return (good - bad) / (good + bad + neutral)
  }

  if (good + neutral + bad == 0) {
    return <div>No feedback given</div>
  }
  else {
  return (
  <div>
    <h2>Statistics</h2>
    <table>
      <tbody>
    <StatisticLine text={`good`}     stat={good} />
    <StatisticLine text={`neutral`}  stat={neutral} />
    <StatisticLine text={`bad`}      stat={bad} />
    <StatisticLine text={`all`}      stat={good + bad + neutral} />
    <StatisticLine text={`average`}  stat={calculateAverage()} />
    <StatisticLine text={`positive`} stat={good / (good + bad + neutral)} />
      </tbody>
    </table>
  </div>
  )
  }
}

const StatisticLine = ({ text, stat }) => (
  <tr>
    <td> {text} </td>
    <td> {stat} </td>
  </tr>  
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)  


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good + 1)} text={"good"} />
      <Button onClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button onClick={() => setBad(bad + 1)} text={"bad"} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App