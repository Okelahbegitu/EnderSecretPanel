import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import CrimeNoteMember from './Model/CrimeNoteMember.js';
import cors from 'cors';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

// Koneksi ke MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('API jalan 🚀');
});

app.listen(port, () => {
  console.log(`Server jalan di http://localhost:${port}`);
});

app.use(express.json());

app.get('/api/crime-note-members/:username_id', (req, res) => {
  CrimeNoteMember.findOne({ usernameId: req.params.username_id }).then(member => {
    if (!member) {
      return res.status(404).json({ message: 'Member tidak ditemukan' });
    }
    res.json(member);
  });
});
