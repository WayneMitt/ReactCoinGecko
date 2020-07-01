import React from 'react';
import { useState, useEffect } from "react"
import { CoinContainer, CoinData } from "./styles.js"
var numeral = require('numeral')

function useStats() {
    const [stats, setStats] = useState();
    useEffect(() => {
        async function fetchData() {
            console.log('fetching data');
            const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd').then(res => res.json()
            );
            setStats(data);
        }
        fetchData();
        
    }, [])
    return stats;
}

function Stats() {
    const stats = useStats();
    if(!stats) return <p>Loading...</p>;
    console.log(stats)

    return (
    <div>
        <div className='statBlock'>
          <div className='fields'>
            <h2>Name</h2>
            <h2>Symbol</h2>
            <h2>Price</h2>
            <h2>Circulating Supply</h2>
            <h2>Market Cap</h2>
          </div>
          
                {stats.map(coin => {
                    return (
                        <CoinContainer>
                            <div className='picName'>
                                <img style={{width: '25px', height:'25px'}} src={coin.image} alt='coin logo'></img>
                                <CoinData>{coin.name}</CoinData>
                            </div>
                            <CoinData>{coin.symbol.toUpperCase()}</CoinData>
                            <CoinData>{numeral(coin.current_price).format('$0,0[.]00')}</CoinData>
                            <CoinData>{numeral(coin.circulating_supply).format()} {coin.symbol.toUpperCase()}</CoinData>
                            <CoinData>{numeral(coin.market_cap).format('$0,0[.]00')}</CoinData>
                        </CoinContainer>
                    )
                })}
        </div>
    </div>
    )
}

export default function App() {
    return (
        <div>
            <p>Powered by <a href='https://www.coingecko.com/en/api#explore-api'>CoinGecko API</a></p>
            <h1>Top 100 Cryptocurrencies by Market Cap</h1>
            <Stats></Stats>
        </div>
    )
}
