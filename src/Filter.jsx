import React from 'react'

const Filter = ({setStatus,setPage}) => {
    const handleChange=(e)=>{
        setStatus(e.target.value)
        setPage(1)
    }
  return (
    <div className='filter'>
        <label htmlFor="status">Filter by status: </label>
        <select id="status" onChange={handleChange}>
        <option value="">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
        </select>
    </div>
  )
}

export default Filter