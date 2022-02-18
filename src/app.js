const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const path = require('path')

const publicPath = path.join(__dirname, ('../public'))
app.use(express.static(publicPath))

const hbs = require('hbs')
app.set('view engine', 'hbs');


const viewpath = path.join(__dirname, '../templetes/views')
app.set('views', viewpath)
const partialspath = path.join(__dirname, '../templetes/partials')
hbs.registerPartials(partialspath)

const news = require('./tools/newsapi')


app.get('/',(req,res)=>{
    news('index',(error,data)=>{
        if(error){
            return res.render('index',{
                error:error
            })
        }
        res.render('index',{
            data
        })
        console.log(data)
    })
})

// nodemon src/app.js

app.get('*', (req, res) => {
    res.render('error')
})

app.listen(port, () => {
    console.log('Exmaple')
})