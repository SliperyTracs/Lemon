import {useRef, useState} from "react"
import { prisma } from "../../server/db/client";
import axios from "axios";
import Link from "next/link";
import {useRouter} from "next/router"
export default function EditProgram({program}){
    const router = new useRouter()
    const nameInputRef = useRef();
    const descriptionInputRef = useRef();
    async function handleSubmit(event){
        event.preventDefault();
        const name = nameInputRef.current.value;
        const description = descriptionInputRef.current.value;
        const {data} = await axios.put('/api/programs', {
            id:program.id,
            name:name,
            description:description,
            userId : 1
        })
        console.log(data)
        router.push("/programs")
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Name : </label>
                <input type="text" ref={nameInputRef} name="Name" defaultValue={program.name}/>

                <label htmlFor='description'>Describe your Program:</label>
                <input type='text' id='description' ref={descriptionInputRef} defaultValue={program.description}/>

                <Link type="reset" href="/programs"> Cancel </Link>
                <button type="submit"> update Program </button>
            </form>
            
        </>
    )
}
export async function getServerSideProps({params}){
    const programId = parseInt(params.id);
    console.log(programId)
    const program = await prisma.Program.findUnique({
        where:{
            id:programId
        }
    })
    return{
        props:{

            program : JSON.parse(JSON.stringify(program))
        }
    }
}