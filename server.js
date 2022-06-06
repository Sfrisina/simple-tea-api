const express = require('express')
const app = express()
const PORT = 8000

const tea = {
    'oolong': {
        'type': 'black',
        'origin': 'Yo mommas house',
        'waterTemp': 200,
        'steepTime':180,
        'caffieneLevel': true,
        'flavor':'delicios'
    },
    'matcha': {
        'type': 'green',
        'origin': 'Yo mommas house',
        'waterTemp': 200,
        'steepTime':180,
        'caffieneLevel': false,
        'flavor':'delicios'
    },
    'unknown': {
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 0,
        'steepTime':0,
        'caffieneLevel': false,
        'flavor':'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
app.get('/api/:name', (request, response) => {
    const teaName = request.params.name.toLowerCase()
    if(tea[teaName] ){
        response.json(tea[teaName])
    }else{
        response.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}`)
})