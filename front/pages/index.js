import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Home(){
    const [result, setResult] = useState('default');

    useEffect( () => {
        axios.get('http://localhost:5000/api/hello')
            .then(res => {
                setResult(res.data.name);
            });
    }, [result]);
    console.log(result);
    
    return(
        <div>
            <h1>Main Page</h1>
            <p>{result}</p>
        </div>
    )
    
}

export default Home;