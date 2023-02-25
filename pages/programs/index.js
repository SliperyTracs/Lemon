import {prisma} from '../../server/db/client'

export default function AllPrograms({users}) {

    return (
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.userName}
                    </li>
                ))}
            </ul>
        </div>
    )
}


export async function getServerSideProps() {
    const users = await prisma.User.findMany();
    return {
      props: {
        users: JSON.parse(JSON.stringify(users))
      }
    };
  }

