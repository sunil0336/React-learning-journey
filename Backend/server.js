const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const users = [
  {
    id: 1,
    username: 'user',
    password: 'password123',
  },
];

// Secret key for JWT
const secretKey = 'sunil123';

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find user by username
  const user = users.find((u) => u.username === username);

  if (!user || user.password !== password) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Create JWT token
  const token = jwt.sign({ userId: user.id,username : user.username }, secretKey, { expiresIn: '1m' });

  res.json({ token });
});

// Dashboard route (requires token)
app.get('/dashboard', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    // Assuming the dashboard is only accessible for valid users
    res.json({ message: 'Welcome to your dashboard!' });
  });
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
