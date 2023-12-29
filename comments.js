// Create web server 
// Run with: node comments.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = [
	{
		name: 'John',
		comment: 'Hello World!'
	},
	{
		name: 'Mary',
		comment: 'Hi, John!'
	}
];

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/comments', (req, res) => {
	res.json(comments);
});

app.post('/comments', (req, res) => {
	const comment = req.body;
	comments.push(comment);
	res.send('Post a comment successfully!');
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`);
});
