var express = require('express')
var path = require('path')
var data = require('./data/data.js')
var wait = require('./data/waitinglist.js')
var app = express()
var port = 8080



app.use(express.urlencoded({ extended : true}))
app.use(express.json())


app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/reserve', function(request, response){
    response.sendFile(path.join(__dirname, 'reserve.html'))
})

app.get('/views', function(request, response){
    response.sendFile(path.join(__dirname, 'tables.html'))
})

app.get('/tables', function(request, response){
    return response.json(data)
})

app.get('/wait', function(request, response){
    return response.json(wait)
})

app.post('/tables', function(request, response){
    var newTable = request.body

    console.log(newTable)

    data.push(newTable)

    response.json(newTable)
})

app.post('/wait', function(request, response){
    var newTable = request.body

    console.log(newTable)

    wait.push(newTable)

    response.json(newTable)
})

app.listen(port, function(){
    console.log('listening on ' + port)
})