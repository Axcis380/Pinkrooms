const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');
const reservationsRouter = require('./routes/reservations');
const guestsRouter = require('./routes/guests');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/pinkroom', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use(express.json());

// Route pour l'authentification
app.get('/api/auth', (req, res) => {
  res.send('Authentification endpoint');
});

app.use('/api/auth', authRouter);
app.use('/api/reservations', reservationsRouter);
app.use('/api/guests', guestsRouter);

// Route pour la racine
app.get('/', (req, res) => {
    res.send('Hello, PinkRoom!');
});

// Port d'écoute
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
