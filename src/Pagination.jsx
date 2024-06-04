import React from 'react'

const Pagination = ({info, page, setPage}) => {
  return (
    <div className='pagination'>
        <button 
        onClick={()=> setPage(page-1)}
        disabled={page===1}
        >
        Previous
        </button>
        <span>Page {page} of {info.pages}</span>
        <button 
        onClick={()=> setPage(page+1)}
        disabled={!info.next}
        >
        Next
        </button>
    </div>
  )
}

export default Pagination