import { useEffect } from 'react'
/* 
asynchronous code
    - useState SETTERS (ex. setState)
    - useEffects's effects

synchronous code
    - most regular JS
*/

const ref = "some reference"

export default function DemoUseState() {
//! useEffect has three timing variables controlled by the last arg "[]"
    useEffect(() => {
        console.log("useEffect will run only on mount")
    }, []);//* <======== here

    useEffect(() => {
        console.log("useEffect will run on mount + whenever 'ref' variable changes")
    }, [ref]);//* <===== here

    useEffect(() => {
        console.log("useEffect will run on EVERY render")
    })//* <============= here

    return (
        <div>
            <h1>count: {count.x}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}