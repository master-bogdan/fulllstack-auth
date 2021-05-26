import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import path from 'path';

const __dirname = path.resolve();

// Initialize express
const app = express();

// Basic Configuration
const PORT = process.env.PORT || 5001;

// Static files
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}


// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(authRoutes);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
