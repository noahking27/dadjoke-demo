import { useEffect, useState } from 'react'
import axios from 'axios'

const DadJoke = () => {     
    const [joke, setJoke] = useState('')

    const fetchJoke = async () => {
        const config = {
            method: 'get',
            url: 'https://icanhazdadjoke.com/',
            headers: { 
                'Accept': 'application/json'
            }
        }
        const { data: { joke } } = await axios(config)
        setJoke(joke)
    }
    
    useEffect(() => {
         fetchJoke();
    }, []) // component mounts
    
    return <h1>{joke}</h1>
}

export default DadJoke