import React from 'react'
import { useEffect, useState } from 'react'


const Home = () => {
    const [data,setData] = useState([]);

    useEffect(()=> {
        const API = fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
        .then((res)=> res.json())
        // console.log(res);
        .then((user)=>setData(user));
    },[])
  return (
    <>
    {data.map((e)=> {
        return <div key={e.div}>
            <img src={e.image}/>
            <h2>{e.name}</h2>
            
           <div className='one'>
           <p>{e.id}</p>
            <h3 className='sym'>{e.symbol}</h3>
            <h3 className='price'>{e.current_price}</h3>
            <h3 className='vol'>{e.total_volume}</h3>
           </div>
            <hr></hr>
        </div>
    })}
    </>
  )
}

export default Home