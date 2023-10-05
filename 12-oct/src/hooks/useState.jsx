import React, {useEffect, useState } from 'react'

export default function UseState() {
    const [count, setcount] = useState(0);

    useEffect(()=>{
        document.title=`count:${count}`
    })
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{ setcount(count+1)}}>+</button>
            <button onClick={()=>{ setcount(count-1)}}>-</button>
        </div>
    )
}
