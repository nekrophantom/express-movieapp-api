import express from 'express';
import dotenv from 'dotenv';
import indexRouter from './routes/index.route.js'

dotenv.config()

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello World!');
})

app.use('/api', indexRouter)

app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
})