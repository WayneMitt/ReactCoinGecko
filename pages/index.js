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
                {stats.map(coin => {
                    return (
                        <CoinContainer>
                            <img style={{width: '25px', height: 'auto'}} src={coin.image}></img>
                            <CoinData>{coin.name}</CoinData>
                            <CoinData>{coin.symbol}</CoinData>
                            <CoinData>{coin.current_price}</CoinData>
                            <CoinData>{numeral(coin.circulating_supply).format()}</CoinData>
                            <CoinData>{numeral(coin.market_cap).format('$0,0[.]00')}</CoinData>
                        </CoinContainer>
                    )
                })}
        </div>
    </div>
    )
}

export default function IndexPage() {
    return (
        <div>
            <p>Powered by <a href='https://www.coingecko.com/en/api#explore-api'>CoinGecko API</a></p>
            <Stats></Stats>
        </div>
    )
}