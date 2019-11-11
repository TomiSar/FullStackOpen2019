const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')

app.use(bodyParser.json())

//backend --> http://localhost:3001/notes and frontend --> http://localhost:3001
let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2019-05-30T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2019-05-30T18:39:34.091Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2019-05-30T19:20:14.298Z",
        important: true
    },
    {
        id: 4,
        content: "Programming JavaScript is one of my favourite things",
        date: "2019-05-19T19:13:14.112Z",
        important: true
    }

]

app.get('/', (req, res) => {
    res.send('<h1>Hello World this is goin to be awesome application!</h1>')
})

const generateId = () => {
    const maxId = notes.length > 0
        ? Math.max(...notes.map(n => n.id))
        : 0
    return maxId + 1
}

app.post('/notes', (request, response) => {
    const body = request.body

    if (!body.content) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const note = {
        content: body.content,
        important: body.important || false,
        date: new Date(),
        id: generateId(),
    }

    notes = notes.concat(note)

    response.json(note)
})

app.get('/notes', (request, response) => {
    response.json(notes)
})

app.get('/notes/:id', (request, response) => {
    const id = Number(request.params.id)  //=> cast to numeric value
    const note = notes.find(note => note.id === id)
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

//Resurssin poisto --> DELETE request should return statuscode 204 or 404
app.delete('/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

//import http from 'http'
//Deploy nodeJS embedded web-server defining module
//https://nodejs.org/docs/latest-v8.x/api/http.html
//REST commands
/*URL	    command	action
notes/10   	GET	    rerieves a single resource
notes	    GET	    rerieves all resources from collection
notes	    POST	creates a new resource from included request data
notes/10	DELETE  deletes the specified resource
notes/10	PUT	    replaces the specified resource with the included request data
notes/10	PATCH	replaces the specified resource with the included request data*/

//const http = require('http')

// app.post('/notes', (request, response) => {
//     const note = request.body
//     console.log(note)
//     response.json(note)
// })

//Nyt app.get('/notes/:id', ...)käsittelee kaikki HTTP GET -pyynnöt, 
//jotka ovat muotoa note/JOTAIN, missä JOTAIN on mielivaltainen merkkijono.
//http://localhost:3001/notes/1 --> console 1, undefined. 
//Halutun muistiinpanon id välittyy sovellukseen aivan oikein, mutta find komento ei löydä mitään.
/*1 number 1 string false
  2 number 1 string false
  3 number 1 string false
  4 number 1 string false*/
// const note = notes.find(note => {
//     console.log(note.id, typeof note.id, id, typeof id, note.id === id)
//     return note.id === id
// }) Response --> Status code 404 This localhost page can’t be found 

// const app = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'application/json' })
//     response.end(JSON.stringify(notes))
//     response.writeHead(200, { 'Content-Type': 'text/plain' })
//     response.end('Hello world. It is nice to see you!!')
// })

// const port = 3001
// app.listen(port)
// console.log(`Server running on port ${port}`)