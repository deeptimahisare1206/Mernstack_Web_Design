import React, { useEffect } from 'react'

export default function UseEffect() {
    useEffect(()=>{
        const fetchdata= fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json());
        fetchdata.then((data)=>{console.log(data)})
    })
    return (
        <div>

        </div>
    )
}
