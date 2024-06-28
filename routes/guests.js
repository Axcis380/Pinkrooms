const express = require('express');
const Guest = require('../models/Guest');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const guest = new Guest(req.body);
        await guest.save();
        res.status(201).send('Guest profile created');
    } catch (err) {
        res.status(400).send('Error creating guest profile');
    }
});

router.get('/', async (req, res) => {
    try {
        const guests = await Guest.find();
        res.json(guests);
    } catch (err) {
        res.status(400).send('Error fetching guest profiles');
    }
});

module.exports = router;
