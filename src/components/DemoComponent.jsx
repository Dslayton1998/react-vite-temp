//* Convention is the function is named after file or vise versa 
//* The function is a component, and components return elements

// function DemoComponent() {
//         //* ^ This is a component, it's established with Caps ...
        
//     return (
//     //* ^ and has a return
//         <div>
//             <h1>Looks like HTML doesn't it?</h1>
//         </div>
//     )
// }

function DemoComponent() {
//? JavaScript - calculate data, run logic, etc.
    const demoVar = "This could be anything JS even conditionals(before return)"
        //* ^ You can set up variables to pass into the "HTML"

    return (
//? JSX - to render data and expressions ( && || ??, Ternary )

        <div>
            <h1>Looks like HTML doesn't it?</h1>
            <h2>{demoVar}</h2>
                //* ^ Syntax: {} around variable Tells JSX we are running JS
        </div>
    )
}

export default DemoComponent
/*          ^
    ! ALWAYS export
        ? Needs to be imported to App.js to be "connected."
*/