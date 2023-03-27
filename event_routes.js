const express = require('express');
const router = express.Router();
const {getall_users, get_users, addEvent, editEvent, deleteEvent} = require('./event_controllers')
const cors = require('cors');

var option = {
    origin: "*",
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}

router.get('/', getall_users);
router.get('/:id', get_users);
router.post('/add', addEvent);
router.patch('/edit/:id', editEvent);
router.delete('/delete/:id', deleteEvent);

module.exports = router;
