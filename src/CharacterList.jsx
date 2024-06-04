import React, { useEffect, useState } from 'react'
import CharacterCard from './CharacterCard'
import Filter from './Filter'
import Pagination from './Pagination'

const CharacterList = () => {
    const [character,setCharacter]=useState([])
    const [status,setStatus]=useState('')
    const [page,setPage]=useState(1)
    const [info,setInfo]=useState({})

    useEffect(()=>{
            fetchCharacters()
    },[status,page])


    const fetchCharacters=async()=>{
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&status=${status}`)
        const data= await response.json()
        setCharacter(data.results)
        setInfo(data.info)
    }
  return (
   <div> 
   <Filter setStatus={setStatus} setPage={setPage}/>
   <div className='character-list'>
    {character.map(character=>(
        <CharacterCard key={character.id} character={character}/>
    ))}
   </div>
   <Pagination info={info} page={page} setPage={setPage}/>
   </div>
  )
}

export default CharacterList