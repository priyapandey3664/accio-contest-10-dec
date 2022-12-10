import React from "react";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const API = fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    )
      .then((res) => res.json())
      // console.log(res);
      .then((user) => setData(user));
  }, []);
  return (
    <>
      {data.map((e) => {
        return (
          <div className="main" style={{ display: "flex",justifyContent:"space-evenly"}} key={e.id}>
            <div  style={{ display: "flex", alignItems:"center"}}>
              <img src={e.image} alt="image" />
              <h5 style={{ marginLeft:"5px"}}>{e.name}</h5>
            </div>
            <div>
              <h4>{e.symbol}</h4>
            </div>
            <div>
              <h3>{e.current_price}</h3>
            </div>
            <div>
              <h3>{e.total_volume}</h3>
            </div>
            <div>
              <h3>{e.price_change_24h}</h3>
            </div>
            <div>
              <h3>{e.fully_diluted_valuation}</h3>
            
            </div>
             
          </div>
        
        );
      })}
    </>
  );
};

export default Home;
