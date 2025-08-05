import express from 'express'
import dotenv from 'dotenv'

const app = express();
dotenv.config(); 
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(PORT, () => {
    console.log(`The server is running at port ${PORT}`);
});
