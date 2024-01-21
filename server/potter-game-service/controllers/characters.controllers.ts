import {Character, Characters} from "../models/character.class";
import {getAllCharacters as getAll} from "../models/potterapi.model";

export async function getAllCharacters(req,res,next){
    const charactersStr:string = await getAll();
    const characters :Characters = Characters.fromSerialized(charactersStr);
    console.log(characters);
    res.send(characters);
}