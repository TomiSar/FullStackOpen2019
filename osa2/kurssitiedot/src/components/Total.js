import React from 'react'

const Total = ({ course }) => {
    const total =  course.parts.reduce((x, y) => x + y['exercises'], 0);
    return (
        <div>
            <h4>total of {total} exercises</h4>
        </div>
    )
}

export default Total