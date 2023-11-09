//! Export default can also take a function directly 

export default function DemoInput(props) {
    const { demoProp, ...restOfProps } = props;
    //* ^ Can destructure the prop passed into DemoInput from App.jsx line 12
    console.log(props)
    return (
        <input {...restOfProps}/>
                // * ^ spread the rest of the props 
    )
}