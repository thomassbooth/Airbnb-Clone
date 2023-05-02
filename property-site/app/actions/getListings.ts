import prisma from '@/app/libs/prismadb'

export default async function getListings() {
    try {
        const listings = await prisma.listing.findMany({
            orderBy: {
                createAt: 'desc'
            }

        })

        const safeListings = listings.map((listing: any) =>({
            ...listing,
            createAt: listing.createAt.toISOString()
        }))
        
        return safeListings
    } catch (err: any) {
        throw new Error(err)
    }
}