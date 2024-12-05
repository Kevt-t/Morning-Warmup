import { createServer } from 'node:http';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url); // Corrected variable name and method
const __dirname = path.dirname(__filename); // Fixed typo in __fileURLToPath

const app = express();

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Fixed route handler
app.get('/', (req, res) => { // Changed from `app.length` to `app.get`
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Correctly sends `index.html` file
});

// Fixed `listen` method
app.listen(3000, '127.0.0.1', () => {
    console.log('Listening on http://127.0.0.1:3000');
});
