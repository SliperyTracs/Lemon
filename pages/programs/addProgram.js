import { useRef,useState } from 'react'

export default function NewProgram() {
    const titleInputRef = useRef();
    const descriptionInputRef = useRef();
        
    function handleSubmit(event) {
        event.preventDefault();
        const title = titleInputRef.current.value;
        const description = descriptionInputRef.current.value;
        const options = {
            method: "POST",
            body:JSON.stringify({
                name:name,
                description:description
            
            }),
            headers:{
                'Content-Type':"application/json"
            }

        }
        console.log(data)
    }
    

    return (
        <div>
            <h1>Add a new program</h1>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label htmlFor='title'>Title of your Program:</label>
                    <input type='text' id='title' ref={titleInputRef}></input>
                </div>
                <div>
                    <label htmlFor='description'>Describe your Program:</label>
                    <input type='text' id='description' ref={descriptionInputRef}></input>
                </div>
                <button>Create Program</button>
            </form>
        </div>
    )
}