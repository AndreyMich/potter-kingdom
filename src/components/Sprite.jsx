import styled from 'styled-components';
export function Sprite({sprite}){
    console.log('sprite rendered');
    return(
        <>
            <SpriteContainer image={sprite.image}>
                <div className='sprite-image'>
                </div>
                <h3>{sprite.name}</h3>
            </SpriteContainer>
        </>
    )
}

const SpriteContainer = styled.div`
    display: flex;
    flex-direction: column;
    & .sprite-image{
      background-image:url(${p=>p.image});
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 15%;
      height: 10rem;
      width: 10rem;
    }
`