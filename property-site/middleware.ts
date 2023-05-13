export { default } from 'next-auth/middleware'

const config = {
    matcher: [
        '/trips',
        '/reservations',
        '/properties',
        '/favorites',
    ]
}