import { useState } from 'react'

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{props.good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{props.neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{props.bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{props.all}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{(props.good - props.bad) / props.all}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{(props.good / props.all) * 100} %</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const FeedbackButton = ({ text, handleClick }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


function App() {
  const [good, setGoodCount] = useState(0)
  const [neutral, setNeutralCount] = useState(0)
  const [bad, setBadCount] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <div className="card" style={{ margin: '2rem', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
        <FeedbackButton text="good" handleClick={() => setGoodCount((count) => count + 1)} />
        <FeedbackButton text="neutral" handleClick={() => setNeutralCount((count) => count + 1)} />
        <FeedbackButton text="bad" handleClick={() => setBadCount((count) => count + 1)} />
      </div>
        <Statistics good={good} neutral={neutral} bad={bad} all={good + neutral + bad} />
    </>
  )
}

export default App
