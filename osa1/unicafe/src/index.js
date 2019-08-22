import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistic = (props) => {
    return (
        <tr>
            <td> {props.text} </td>
            <td> {props.value} </td>
        </tr>
    )
}

const Statistics = (props) => {
    var total = props.good + props.neutral + props.bad;
    var badTotal = props.bad * -1;
    var average = (props.good + badTotal) / total;

    const posFeedback = (props.good / total) * 100.0;

    if (total > 0) {
        return (
            <>
                <h1>statistics</h1>
                <table>
                    <tbody>
                        <Statistic text='good' value={props.good} />
                        <Statistic text='neutral' value={props.neutral} />
                        <Statistic text='bad' value={props.bad} />
                        <Statistic text='all' value={total} />
                        <Statistic text='average' value={average} />
                        <Statistic text='positive' value={posFeedback + ' %'} />
                    </tbody>
                </table>
            </>
        )
    } else {
        return (
            <>
                <p>No feedback given</p>
            </>
        )
    }
}

const Input = ({ inputGood, inputNeutral, inputBad }) => {
    return (
        <div>
            <h1>give feedback</h1>
            <Button text='good' handler={inputGood} />
            <Button text='neutral' handler={inputNeutral} />
            <Button text='bad' handler={inputBad} />
        </div>
    )
}

const Button = ({ handler, text }) => {
    return (
        <button onClick={handler} > {text} </button>
    )
}

const App = (props) => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const incrtGood = () => setGood(good + 1)
    const incrtNeutral = () => setNeutral(neutral + 1)
    const incrtBad = () => setBad(bad + 1)

    return (
        <div>
            <Input inputGood={incrtGood} inputNeutral={incrtNeutral} inputBad={incrtBad} />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA