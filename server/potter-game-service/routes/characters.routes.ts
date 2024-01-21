import {getAllCharacters} from "../controllers/characters.controllers";

export function getCharactersRoutes(app){
    app.get('/api/characters',getAllCharacters)
}