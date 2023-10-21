import React from 'react';
import { Link } from 'react-router-dom';

const CardDisplay = ({id,name,image}) => { 
  return (
    <>     
        <div className='w-full min-w-[200px] max-w-[200px] bg-slate-800 hover:shadow-lg drop-shadow-lg rounded py-5 px-6 mt-5 cursor-pointer flex flex-col '>
          <div className='h-28 flex flex-col justify-center item-center'>
              <img src={image} className="h-full"alt="" />
          </div>
          <h3 className='font-semibold text-slate-600  captitalize text-lg mt-4 whitespace-nowrap overlay-hidden text-white'>{name}</h3>
           <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:"0",behaviour:"smooth"})}>
           <button className='bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 w-full'>
             Read More
          </button>
          </Link>      
      </div>
 </>
  )
}

export default CardDisplay