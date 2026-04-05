import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  console.log('Received message from:', name, email);
  console.log('Message:', message);

  // In a real app, you would use Nodemailer here to send an email
  // For this portfolio, we'll simulate success
  setTimeout(() => {
    res.status(200).json({ message: 'Message sent successfully!' });
  }, 1000);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
