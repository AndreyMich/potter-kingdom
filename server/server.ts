import express from 'express';

const app = express();
app.use(express.json());

app.get('*', (req,res,next)=>{
    console.log(req.url);
    res.send(req.url);
})
const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`listening on port ${port} . good coding :)`)

})