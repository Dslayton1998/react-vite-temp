import { useEffect, useState } from "react"

export default function DemoForms() {
    const [errors, setErrors] = useState({})           //* For error handling
    const [submitted, setSubmitted] = useState(false) //*  Flag
    const [input1, setInput1] = useState("")

    useEffect(() => {
        const errors = {} //* new memory ref
        if(input1.length < 4) {
            errors.input1 = "The string is to short"
            // console.log("Only if there is less than 4 :3")
        }
            // console.log("Changed again!")// 3rd
        setErrors(errors)
    }, [input1]);

    const handleSubmit = async (event) => {
        event.preventDefault(); //* Prevents the page from reloading

        setSubmitted(true)

        const formData = {
            email: input1
        }

        console.log(formData)

        const res = await fetch('/path', {
            method: "POST",
            body: formData
        })

        if(res.ok) {
            //do something else *navigate to another page
        } else {
            // don't redirect
            // set errors
        }
    }

    // console.log("Component just rendered") // 1st
    return (
        <form onSubmit={handleSubmit} action="https://fake-url.com">
            <h1>Hey, what's up</h1>
            {/* //* Inputs need labels (accessibility options) */}
            <label>Demo Input</label>
            <input
                id="input-1"
                value={input1}
                onChange={(event) => setInput1(event.target.value)}
                type="text"
                min={4}
            />
            {/* //! This will work but we use props to control states, ALL inputs get their own useState */}
            {submitted && errors.input1 && (<h5>{errors.input1}</h5>)}
            {console.log("Fin~")} {/*// 2nd */}
        </form>
    )
}