import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick} >{text}</button>
    )
}

const App = ({ anecdotes }) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

    const addVote = (selected) => () => {
        const incrVotes = [...votes]
        incrVotes[selected]++
        setVotes(incrVotes)
    }

    const setRandomAnecdote = () => () => {
        setSelected(Math.floor(Math.random() * Math.floor(anecdotes.length)))
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected] }<br/> has {votes[selected]} votes</p>
            <Button handleClick={addVote(selected)} text="Vote" />
            <Button handleClick={setRandomAnecdote()} text="Next anecdote" />
            <MostVotesTotal anecdotes={anecdotes} votes={votes} />
        </div>
    )
}

const MostVotesTotal = ({ handleClick, votes }) => {
    const mostVoted = Math.max(...votes)
    const mostVotedIndex = votes.indexOf(mostVoted)

    if (mostVoted > 0) {
        return (
            <>
                <h1>Anecdote with the most votes</h1>
                <p>{anecdotes[mostVotedIndex]} <br/> has {votes[mostVotedIndex] + ' votes'} </p>
            </>
        )
    } return (
        <>
            <h1>Anecdote with the most votes</h1>
            <p>No votes has been casted for any anecdote</p>
        </>
    )
}

ReactDOM.render(
    <App anecdotes={anecdotes} />, document.getElementById('root')
)