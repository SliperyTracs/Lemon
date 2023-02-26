import { prisma } from "@/server/db/client"

export default async function handler(req, res) {
    const {method} = req
    const {id, title, description} = req.body
   console.log("This is iD" + id);
    switch (method) {
        case 'POST': 
            const list = await prisma.Program.create({
                data: {
                    title,
                    description
                },
            })
            res.status(201).json(list)
            break
        default:
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${method} not allowed`)
    }
}
