import { useRef,useState } from 'react'
import {useRouter} from "next/router"
import axios from 'axios'
import Link from "next/link"
export default function NewProgram() {
    const router = new useRouter();
    const nameInputRef = useRef();
    const descriptionInputRef = useRef();
        
    async function handleSubmit(event) {
        event.preventDefault();
        const name = nameInputRef.current.value;
        const description = descriptionInputRef.current.value;
        const {data} = await axios.post('/api/programs', {
            name,
            description,
            userId:1
        })
        console.log(data)
        router.push('/programs')
    }
    

    return (
        <div>
            <h1>Add a new program</h1>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label htmlFor='name'>name of your Program:</label>
                    <input type='text' id='name' ref={nameInputRef}></input>
                </div>
                <div>
                    <label htmlFor='description'>Describe your Program:</label>
                    <input type='text' id='description' ref={descriptionInputRef}></input>
                </div>
                <Link type="reset" href="/programs"> Cancel </Link>
                <button type="submit"> Create Program </button>
            </form>
        </div>
    )
}