import styled from 'styled-components';
import {Sprite} from "./Sprite.jsx";
import {useState} from "react";

export function Game(){
    console.log('game rendered');
    const [isGameStarted,setIsGameStarted] = useState(false);
    const [sprite,setSprite] = useState(null);
    const [sprites,setSprites] = useState(null);

    const handleStart = ()=>{
        setRandomPlayer();
        setIsGameStarted(true);
    }

    function randomizePlayer(spriteCollection) {
       const randomIndex = Math.floor(Math.random() * spriteCollection.characters.length);
       return spriteCollection.characters[randomIndex];
    }

    function setRandomPlayer() {
        fetch('http://localhost:3001/api/characters')
            .then(data=>data.json())
            .then(json=> {
                setSprite(randomizePlayer(json));
                setSprites(json);
            })
            .catch(data => console.error(`failed to fetch characters error : ${data}` ))
    }

    function handleNextPlayer() {
        const newSprite = randomizePlayer(sprites);
        setSprite(newSprite);
    }

    return (
        <>
            <Stack>
                <h1>Potter Game</h1>
                {!isGameStarted && <button onClick={handleStart}>Start</button>}
                {isGameStarted && <p>Game started...</p>}
                {sprite && <Sprite sprite={sprite}/>}
                <button onClick={handleNextPlayer}>Next Player</button>
            </Stack>
        </>
    )
}

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
