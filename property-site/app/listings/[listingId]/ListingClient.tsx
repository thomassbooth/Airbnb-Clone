'use client'

import { Reservation } from ".prisma/client"
import Container from "@/app/components/Container"
import ListingHead from "@/app/components/listings/ListingHead"
import ListingInfo from "@/app/components/listings/ListingInfo"
import { categories } from "@/app/components/navbar/Categories"
import { SafeListing, SafeUser } from "@/app/types"
import { useMemo } from "react"

interface ListingClientProps {
    reservations?: Reservation[]
    listing: SafeListing & {
        user: SafeUser
    }
    currentUser?: SafeUser | null

}

const ListingClient: React.FC<ListingClientProps> = ({
    listing,
    currentUser
}) => {

    const category = useMemo(() => {
        return categories.find((item) => item.label === listing.category)
    }, [listing.category])

  return (
    <Container>
        <div className = 'max-w-screen-lg mx-auto'>
            <div className = 'flex flex-col gap-6'>
                <ListingHead
                    title = {listing.title}
                    locationValue = {listing.locationValue}
                    imageSrc = {listing.imageSrc}
                    id = {listing.id}
                    currentUser = {currentUser}
                />
                <div className = 'grid grid-cols-1 md:grid-cols-7 md:grap-10 mt-6'>
                    <ListingInfo 
                        user = {listing.user}
                        category = {category}
                        description = {listing.description}
                        roomCount = {listing.roomCount}
                        guestCount = {listing.guestCount}
                        bathroomCount = {listing.bathroomCount}
                        locationValue = {listing.locationValue}
                    />
                </div>
            </div>
        </div>
    </Container>
  )
}

export default ListingClient