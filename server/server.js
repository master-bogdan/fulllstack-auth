import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';

// Initialize express
const app = express();

// Basic Configuration
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(authRoutes);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
