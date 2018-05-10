const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Welcome to Express Demo'));

app.post('/', (req, res) => res.send('Welcome to Express Demo. This is Post request'));

app.all('/person', (req, res) => res.send('Welcome to Person'));

app.get('/student', (req, res) => res.send('Welcome to Student'));

app.get('/student/:id', (req, res) => res.send('Welcome to Student' + req.params.id));

app.get('/student/:id/:action', (req, res) => res.send('Welcome to Student' + req.params.id + ' action: ' + req.params.action));

app.post('/student/:id/:action', (req, res) => {
	var action = req.params.action;
	
	if(action == 'add') {
		res.send('Added');
	}
	
	res.send('Create/Update/Delete Student' + req.params.id + ' action: ' + action);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))