const express = require('express')
const app = express();
const cors = require('cors')
const port = 3000;

app.use(cors())

const MOCK_DB = {
    todo: ['hello world',
    'you can type your notes here']
};

app.get('/', (req, res) => {
  res.send('Api is up and working');
  console.log(MOCK_DB.todo);
});

app.get('/list',(req,res)=>{
    res.send(MOCK_DB);
    console.log(MOCK_DB.todo);
});

app.get('/add',(req,res)=>{
    const text = req.query.content;
    MOCK_DB.todo.push(text);
    res.send(MOCK_DB);
    console.log(MOCK_DB.todo);
});

app.get('/remove',(req,res)=>{
    MOCK_DB.todo.pop();
    res.send(MOCK_DB);
    console.log(MOCK_DB.todo);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})