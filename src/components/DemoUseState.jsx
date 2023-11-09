import { useState } from 'react'
//* ^ is a FUNCTION that returns an array [<variable>, <"setVariable"(function)>]
//? ^ ( *React.Dispatch* Runs AFTER our code ) *TRIGGER* => *RENDER* => *COMMIT*
/*
    ? Trigger
        - useState runs
    ? Render
        - Component runs ( js )
    ? Commit
        - useEffects runs
*/
//! ^ In order to get react to re-render you have to pass a SETTER a NEW reference in memory
/* 
asynchronous code
    - useState SETTERS (ex. setState)
    - useEffects's effects

synchronous code
    - most regular JS
*/

export default function DemoUseState() {
    /* //* Example) 
        function test() {
            setState('I run second') //* A new reference in memory *\\
            console.log('I run first')
        }
    */
    const [state, setState] =  useState(0);
    function handleClick() {
        setState(state + 1)
    }
//! ^ This does sometimes work fine but...

   
    //     const [state, setState] =  useState({ x: 0});
    //     function handleClick() {
    //         state.x + 1
    //         setState(state)
    //         console.log('We set count')
    // //! ^ In order to get react to rerender you have to pass a SETTER a NEW reference in memory
    //     }

    //     const [state, setState] =  useState({ x: 0});
    //     function handleClick() {
    //            setState({ ...state, n: state.x + 1 }) //* Spread is great for creating copies... 
    //                                 //* ^ HASH COLLISION(overwrites old key)
    //            console.log('We set count')
    //  //! Fixes the issues from above
    //        }

    return (
        <div>
            <h1>count: {count.x}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}