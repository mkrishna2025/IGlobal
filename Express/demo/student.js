const express = require('express');

var router = express.Router();

router.get('/', (req, res) => res.send('Welcome to Student'));

router.get('/:id', (req, res) => res.send('Welcome to Student' + req.params.id));

router.get('/:id/:action', (req, res) => res.send('Welcome to Student' + req.params.id + ' action: ' + req.params.action));

router.post('/:id/:action', (req, res) => {
	var action = req.params.action;
	
	if(action == 'add') {
		res.send('Added');
	} else {
		res.send('Create/Update/Delete Student' + req.params.id + ' action: ' + action);
	}
});

module.exports = router;

