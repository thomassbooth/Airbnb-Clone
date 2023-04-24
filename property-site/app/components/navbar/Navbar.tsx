import Container from "../Container"

function Navbar() {
  return (
    <div className = 'fixed w-full bg-white'>
        <div className = 'py-4 border-b-[1px]'>
            <Container>
                <div className = 'flex flex-row items-center justify-between gap-3 md:gap-0'>
                    <p>Dave</p>
                    <div className = 'flex gap-5'>
                        <p>Home</p>
                        <p>Buy</p>
                        <p>About</p>
                        <p>Contact Us</p>
                    </div>
                    <p>Not Dave</p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Navbar