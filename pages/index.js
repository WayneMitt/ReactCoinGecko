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

    return (
    <div>
        <div className='statBlock'>
            <span>
                
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