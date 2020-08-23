var express = require('express')

var app = express()

var hbs = require('hbs')
hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('getTime', () => {
    return new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds() + ' ' + new Date().toString()
})

var port = process.env.PORT || 3000
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('home', {
        title: "Home Page"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Page"
    })
})

app.get('/contect', (req, res) => {
    res.render('contect', {
        title: "Contect Page"
    })
})
app.listen(port, () => {
    console.log(`you are listining on port ${port}`)
})