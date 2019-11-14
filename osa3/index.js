const express = require('express');
const app = express();

let persons = [
    {
        name: 'Arto Hellas',
        number: '040-123456',
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "39-44,532523",
        id: 2
    },
    {
        name: 'Dan Abramov',
        number: '12-43-234345',
        id: 3
    },
    {
        name: 'Mary Poppendick',
        number: '39-23-6423122',
        id: 4
    },
    {
        name: 'Luke Skywalker',
        number : '98-12234556',
        id : 5
    }
]

app.get('/', (request, response) => {
    response.send('<h1>FullStack open 2019 part three phonebook application</h1>')
})

//localhost:3001/api/persons
app.get('/api/persons', (request, response) => {
    response.json(persons);
})

const port = process.env.port || 3001;
app.listen(port, () => {
    console.log(`Server running on localhost:${port}`)
})