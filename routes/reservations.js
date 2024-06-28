const express = require('express');
const Reservation = require('../models/Reservation');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const reservation = new Reservation(req.body);
        await reservation.save();
        res.status(201).send('Reservation created');
    } catch (err) {
        res.status(400).send('Error creating reservation');
    }
});

router.get('/', async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.json(reservations);
    } catch (err) {
        res.status(400).send('Error fetching reservations');
    }
});

module.exports = router;
