import React from 'react'

//Course part information
const Part = ({part}) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
}

export default Part