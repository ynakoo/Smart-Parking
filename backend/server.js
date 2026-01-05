const express = require('express')
const cors = require('cors')
const prisma = require('./src/config/prisma')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('backend chl gya')
})

const authRoutes = require('./src/routes/auth.routes')
app.use('/api/auth', authRoutes)

async function main() {
    try {
        await prisma.$connect();
        console.log('Connected to Database');

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
}

main();

