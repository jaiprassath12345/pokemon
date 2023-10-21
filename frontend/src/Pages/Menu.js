import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom'

const Menu = ({params}) => {
 const filterby=useParams()
const id=filterby.id
const [pokeData,setPokeData]=useState({
  image:'',
  name:'',
  statName:'',
  stat:'',
  poke:''
});
const [url,setUrl]=useState(`${process.env.REACT_APP_SERVER_DOMAIN}/pokemon/${id}`);
const pokeFun=async ()=>{ 
  const res= await fetch(url)
  const resData=await res.json()
  const res2=await fetch(resData.url)
  const resData2=await res2.json()
  setPokeData({
    image:resData2.sprites.other.dream_world.front_default,
    name:resData2.abilities.map(poke=>{
    return  poke.ability.name
    }),
    statName:resData2.stats.map(poke=>{
      return  poke.stat.name 
      }),
      stat:resData2.stats.map(poke=>{
        return  poke.base_stat
        }),
    poke:resData2.forms.map(poke=>{
      return  poke.name
      }),
  })
}
useEffect(()=>{
  pokeFun();
 },[url])
  return (   
    <div className=" p-2 md:p-4">
    <div className="w-full max-w-4xl m-auto md:flex bg-white md:max-h-[70vh] md:min-h-[40vh]">
        <div className="max-w-lg  overflow-hidden w-full p-5">
            <img src={pokeData.image} alt="" className="hover:scale-105 transition-all h-full" />    
        </div>
        <div className='flex flex-col gap-1 '>
        <div className='justify-center item-center mb-5'>
        <h3 className=' text-slate-800 font-medium text-3xl'>
          {pokeData.poke[0]}
        </h3>
     </div>
        <h3 className='font-semibold text-slate-600 bg-slate-400  captitalize text-xl md:text-xl mb-5'>
          {pokeData.name[0]}<hr />
          {pokeData.name[1]} <hr />
          {pokeData.name[2]} <hr />
          </h3>
      <p className=' text-slate-500 font-medium text-l'>
        {pokeData.statName[0]} :{pokeData.stat[0]}<br />
        {pokeData.statName[1]}:{pokeData.stat[1]} <br />
        {pokeData.statName[2]}:{pokeData.stat[2]}  <br />
        {pokeData.statName[3]}:{pokeData.stat[3]}  <br />
        {pokeData.statName[4]}:{pokeData.stat[4]}  <br />
        {pokeData.statName[5]}:{pokeData.stat[5]}
        </p>
        </div>
    </div>
  </div>
  )}

export default Menu