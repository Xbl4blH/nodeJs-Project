const exphbs = require('express-handlebars')
const express = require('express')
const port = 3000
const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
    })

const myRouters = require('./router/handlers')


app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

var path = require ('path');

app.use(express.static(path.join(__dirname + 'public')));
app.use(express.urlencoded({extended: true}))
// app.use(express.static(path.join(__dirname, 'public')))

app.use(myRouters)


console.log('TEST')

// app.set('view engine', 'pug');

// app.get('/home', function (req, res) {
//     res.render('index', { title: 'Hey', message: 'Hello there!'});
//   });

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// const express = require('express')
// const app = express()
// const hbs = exphbs.create({
// defaultLayout: 'main',
// extname: 'hbs'
// })

// app.engine('hbs', hbs.engine)
// app.set('view engine', 'hbs')
// app.set('views', 'views')

// app.use(express.urlencoded({extended: true}))
// app.use(express.static(path.join(__dirname, 'public')))

// app.use(todoRoutes)



// const http = require('http')
// const hostname = '127.0.0.1'
// const port = 3000
// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('Hello World\n')
// })
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })