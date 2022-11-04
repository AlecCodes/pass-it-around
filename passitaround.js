const express = require('express')
const app = express();
const URL = `http://localhost:3000/count/`



app.get('/count/:number_of_bottles', (req,res) => {

    if (req.params.number_of_bottles <= 0){
        res.send(`
        ${req.params.number_of_bottles} bottles of beer on the wall! 
        <a href = ${URL}99>START OVER</a>
        `)
    }else{
        res.send(`
            <html>
                <body>            
                <div>${req.params.number_of_bottles} bottles of beer on the wall!!</div>
                <a href = ${URL}${req.params.number_of_bottles -1}>Take one down and pass it around</a>
                </body>
            </html>
        `)
    }
})

app.get('/', (req,res) => {
    res.send(`
    <html>
        <body>
            <h1>99 bottles of beer on the wall<h2>
            <a href = ${URL}98>click</a>
        </body>
    </html>
    `)
})
 

app.listen(3000, () => console.log('BEER TIME'))