import { useState, useEffect } from "react"

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
            <span>
                {stats.map(coin => {
                    return (
                        <ul>
                            <img src={coin.image}></img>
                            <li>Name: {coin.name}</li>
                            <li>Symbol: {coin.symbol}</li>
                            <li>Price: {coin.current_price}</li>
                            <li>Market Cap: {coin.market_cap}</li>
                        </ul>
                    )
                })}
            </span>
        </div>
    </div>
    )
}

export default function IndexPage() {
    return (
        <div>
            <Stats></Stats>
        </div>
    )
}