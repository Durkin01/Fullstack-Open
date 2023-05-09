import { useState } from 'react'

const Button = ({ text, onClick }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const MostVotes = ({ pointsArray, anecdotes }) => {

  function findLargest(pointsArray) {
    let maxNum = 0;
    let maxIdx = 0;

    console.log(pointsArray)

    for (let i = 0; i < 7; i++) {
      if (pointsArray[i] > maxNum) {
        console.log(pointsArray[i], maxNum)
        maxNum = pointsArray[i]
        maxIdx = i
      }
    }
    return maxIdx;
  }  
  console.log("outside", pointsArray)

  return (
  <>
    <h1>
      Anecdote with the most votes
    </h1>
    <div>
      {anecdotes[findLargest(pointsArray)]}
    </div>
  </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 })

  function randomNumber(max, min) {
    return setSelected(Math.floor(Math.random() * (max - min) + min));
  }

  function placeVote(vote) {
    const copy = { ...points}
    copy[vote] += 1
    return (setPoints( copy ));
  }


  return (
    <div>
      <h1>
        Anecdote of the day
      </h1>
        {anecdotes[selected]}
      <div>
        has {points[selected]} votes
      </div>
      <div>
        <Button text={'vote'} onClick={ () => placeVote(selected) } />
        <Button text={'next anecdote'} onClick={ () => randomNumber(0, anecdotes.length - 1)} />
      </div>
      <MostVotes pointsArray={points} anecdotes={anecdotes} />
    </div>
  )
}

export default App