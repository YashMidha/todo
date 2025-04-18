import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import connectDB from './config/db.js';
import todoRoutes from './routes/todoRoutes.js';

const PORT = 4000;
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/todos', todoRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (req, res)=>{res.send('Server running')});
