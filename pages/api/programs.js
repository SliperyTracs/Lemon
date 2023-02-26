import { prisma } from "@/server/db/client"
export default async function handler(req, res) {
    const {method} = req
    const {id, name, description,userId} = req.body
   console.log("This is iD " + id);
    switch (method) {
        case 'POST': 
            const list = await prisma.Program.create({
                data: {
                    name:name,
                    description:description,
                    userId:userId
                },
            })
            res.status(201).json(list)
            break
        case 'PUT' :
            const updateProgram = await prisma.Program.update({
                where : { 
                    id:id
                },
                data:{
                    name:name,
                    description:description,
                    userId:userId
                }
            })
            res.status(201).json(updateProgram)
            break
        case 'DELETE':
            const deleteProgram = await prisma.Program.delete({
                where: {
                    id: id,
                }
            })
            res.status(200).json(deleteProgram);
            break
        default:
            res.setHeader('Allow', ['POST',"PUT",'DELETE'])
            res.status(405).end(`Method ${method} not allowed`)
    }
}
