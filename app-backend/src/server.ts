import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import path from 'path';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

console.log(path.join(__dirname, '../../app-frontend/dist/app-frontend/browser'));
 app.use(express.static(path.join(__dirname, '../../app-frontend/dist/app-frontend/browser')));

app.use('/', authRoutes);


console.log(path.join(__dirname, '../../app-frontend/dist/app-frontend/browser/index.csr.html'));
app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, '../../app-frontend/dist/app-frontend/browser/index.csr.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
