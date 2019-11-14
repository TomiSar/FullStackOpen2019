const express = require('express');
const app = express();
const bodyparser = require('body-parser')

app.use(bodyparser.json())

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
        number: '98-12234556',
        id: 5
    }
]

//http://localhost:3001
app.get('/', (request, response) => {
    response.send('<h1>FullStack open 2019 part three phonebook application</h1>')
})

//http://localhost:3001/api/persons
app.get('/api/persons', (request, response) => {
    response.json(persons);
})

//Phonebook backend step2 Date, info and number of persons in phonebook
const info = `Phonebook has info for ${persons.length} people <br></br> ${Date()}`
app.get('/info', (request, response) => {
    response.send(info)
})

//Phonebook backend step5 Add new person in phonebook --> POST http://localhost:3001/api/persons
app.post('/api/persons/:id', (request, response) => {
    //const randomNumberId = Math.floor((Math.random() * 10000) + 1);
    const body = request.body
    console.log(body);

    if (body.name === undefined) {
        return response.status(400).json({ error: 'name information is missing' })
    } else if (body.number === undefined) {
        return response.status(400).json({ error: 'Number information is missing' })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: Math.floor(Math.random() * 10000 + 1)
    };

    persons = persons.concat(person);
    response.json(person)
})

//Phonebook backend step3 http://localhost:3001/api/persons/{id} The HTTP 404, 404 Not Found, 404, Page Not Found, or Server
app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if (!person) {
        response.status(404).end()
    } else {
        response.json(person)
    }
})

//Phonebook backend step4 DELETE http://localhost:3001/api/persons/{id}
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

const port = process.env.port || 3001;
app.listen(port, () => {
    console.log(`Server running on localhost:${port}`)
})