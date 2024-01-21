// @ts-ignore
import express from 'express'
import cors from 'cors'
import {getCharactersRoutes} from './routes/characters.routes'

const app = express();

app.use(express.json());
app.use(cors());
getCharactersRoutes(app);

const port = process.env.PORT || 3001;
app.listen(port,()=>{
   console.log('app listening at http://localhost:' + port + ' happy coding:)')
});

