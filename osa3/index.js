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
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let notes = [
    {
        id: 1,
        content: "HTML is easy to learn",
        date: "2019-05-30T17:30:31.098Z",
        important: true,
    },
    {
        id: 2,
        content: "Browser can oly execute JavaScript",
        date: "2019-05-30T18:39:34.091Z",
        important: false,
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of the HTTP protocol",
        date: "2019-05-30T19:20:14.298Z",
        import: true,
    },
    {
        id: 4,
        content: "JavaScript coding is awesome. One of my favourite things =)",
        date: "2019-05-30T20:07:12.197Z",
        import: true,
    },
    {
        id: 10,
        content: "This in the 10th note",
        date: "2019-05-30T21:09:32.493Z",
        import: true,
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello world this is amazing Application =)!</h1>')
})

const generateId = () => {
    const maxID = notes.length > 0 
    ? Math.max(...notes.map(note => note.id)) 
    : 0
    return maxID + 1
}

app.post('/notes', (request, response) => {
    const body = request.body

    if (!body.content) {
        return response.status(400).json({
            error: 'content misssing'
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

app.get("/notes", (request, response) => {
    response.json(notes)
})

app.get('/notes/:id', (request, response) => {
    const id = Number(request.params.id) //const id = request.params.id => cast to numeric value
    const note = notes.find(note => note.id === id)
    if (!note) {
        response.status(404).end()
    } else {
        response.json(note)
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