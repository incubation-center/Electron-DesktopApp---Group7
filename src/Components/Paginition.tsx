import React, { useState } from 'react'

function Paginition() {
    let [numpage, setNumpage] = useState(0);
    let [curpage, setCurpage] = useState(0);
    const pages = [
        {page: numpage},
        {page:numpage + 1},
        {page:numpage + 2},
        {page:numpage + 3},
    ]
    
    const Next = () => {
        setNumpage(++numpage)
    }
    const Back = () => {
        setNumpage(--numpage)
    }

  return (
    <div className="flex bg-white rounded-lg font-[Poppins] mt-2 justify-end">
         <button onClick={Back} className="h-8 border-2 border-r-0 border-blue-400
               px-4 rounded-l-lg hover:bg-blue-600 hover:text-white">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
            </svg>
         </button>
         {
            pages.map((pg, i) => (
               <button key={i} onClick={() => setCurpage(pg.page)} className={`h-8 border-2 border-r-0 border-blue-400
               w-12 ${curpage === pg.page && 'bg-blue-400 text-white'}`}>{pg.page}</button>
            ))
         }
         <button onClick={Next} className="h-8 border-2  border-blue-400
               px-4 rounded-r-lg hover:bg-blue-600 hover:text-white">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
         </button>
      </div>
  )
}

export default Paginition
