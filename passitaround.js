const express = require('express')
const app = express();
const URL = `http://localhost:3000/count/`


function fibchecker(num){
        const seq = [0,1]
        let running = true;
        let status = null;
        if (num === 0){
            status = 'It is fib!'
        }else{
            while (running){
                for (let i = 0; i < 100000000e+100; i += 1){
                    seq.push(seq[seq.length-2] + seq[seq.length-1])
                    if (seq[seq.length -1] === num){
                        status = 'It is fib!'
                        running = false
                        break;
                    } else if (seq[seq.length -1] > num) {
                        status = 'Not a fib!'       
                        running = false
                        break;
                    }
                }
            }
        }    
        return status
}

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
                <div>${req.params.number_of_bottles} bottles of beeer!!</div>
                <div>Take one down</div>
                <a href = ${URL}${req.params.number_of_bottles -1}>patch it around</a>
                <div>${Math.floor(Math.random() * 135)} bugs in the code</div>
                </body>
            </html>
        `)
    }
})


/////////////////////////////////////
// Fibionacci
/////////////////////////////////////



app.get('/fibionacci/:num', (req, res) => {
    const answer = fibchecker(parseInt(req.params.num))
    console.log(typeof req.params.num)
    res.send(`'spooky halloween fffibbb num': ${req.params.num} isss it a fib num?? ${answer}`)
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