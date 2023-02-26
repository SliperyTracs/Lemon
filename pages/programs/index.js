import {prisma} from '../../server/db/client'

import axios from 'axios'
import Link from 'next/link'
export default function AllPrograms({users,programs}) {
    console.log(programs)
    async function handleDelete(event,id){
        event.preventDefault()
        const {data} = await axios.delete('/api/programs', {
            data: {
                id:id
            }
        })
        console.log(id);
    }
    return (
        <div>
            <div> All users</div>
           <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.userName}
                        
                    </li>
                ))}
            </ul>
            <div> All programs</div>
            <Link href="programs/addProgram">Add program</Link>
            <div>
                <ul>
                    {programs.map(program=>(
                        <li key={program.id}>
                            <Link href={`programs/${program.id}`}>
                                {program.name}
                                <button onClick={()=>handleDelete(program.id)}>Delete program</button>
                            </Link>
                            
                        </li>
                    ))}
                </ul> 
            </div>
        </div>
    )
}


export async function getServerSideProps() {
    const users = await prisma.User.findMany();
    const programs = await prisma.Program.findMany();
    console.log(programs)
    return {
      props: {
        users: JSON.parse(JSON.stringify(users)),
        programs: JSON.parse(JSON.stringify(programs))
      }
    };
  }

