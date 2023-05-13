import { PrismaClient } from '@prisma/client'

//create a global var of prisma
declare global {
    var prisma: PrismaClient | undefined
}

//checks the global values if prisma exists if it doesnt then makes a new client
const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client

export default client;