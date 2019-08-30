import React from 'react'
import Course from './components/Course'

const App = ({courses}) => {
    const info = () => courses.map(course => < Course key={course.id} course={course}/>)

    return(
        <div>
            <h1>Web development curriculum</h1>
            {info()}
        </div>
    )
}

export default App