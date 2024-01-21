import {endpoints} from '../configs/endpoints.config'
export function getAllCharacters():Promise<string>{
    return new Promise((resolve,reject)=>{
        fetch(`${endpoints.POTTER_API}/api/characters`)
            .then(data=>data.text())
            .then(json=>resolve(json))
            .catch(err => reject(err))
    })
}