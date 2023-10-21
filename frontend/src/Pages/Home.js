import CardDisplay from '../Components/CardDisplay'
import React, { useState, useEffect } from 'react';
import axios from "axios";

const Home = () => {
  const [pokeData, setPokeData] = useState([]);
  const [visible,setVisible]=useState(14);
  const [url, setUrl] = useState(`${process.env.REACT_APP_SERVER_DOMAIN}/pokemon`);

  const pokeFun = async () => {
    const res = await fetch(url)
    const resData = await res.json()
    for (const arr of resData) 
    {
      getPokemon(arr.results)
    }
  }

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url)
      setPokeData(state => {
        state = [...state, result.data]
        state.sort((a, b) => a.id > b.id ? 1 : -1)
        return state;
      })
    })
  }

  useEffect(() => {
    pokeFun();
  }, [url])

  const showMoreItems=()=>{
      setVisible(prev=>prev+14)
  }

  return (
    <>
      <div className='flex flex-wrap justify-center gap-4'>
        {
        pokeData.slice(0,visible).map((e) => {
          return (
            <CardDisplay className=''
              key={e.id}
              id={e.id}
              image={e.sprites.front_default}
              name={e.name}
            />
            )})}
      </div> 
      <div className="flex w-full justify-center item-center mt-5">
        <button
          className='bg-yellow-500 py-2 mt-3 rounded hover:bg-yellow-600 min-w-[100px]'
          onClick={showMoreItems}>
           Load More</button>
   
      </div>
    </>
  )
}
export default Home