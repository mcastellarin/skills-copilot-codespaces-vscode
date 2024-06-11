// Create web server
const express = require('express');
const app = express();

// Use static files
app.use(express.static('public'));

// Use body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Use ejs template engine
app.set('view engine', 'ejs');

// Comments array
const comments = [
  { name: 'John', comment: 'I am John' },
  { name: 'Smith', comment: 'I am Smith' },
  { name: 'Doe', comment: 'I am Doe' }
];

// Get comments
app.get('/comments', (req, res) => {
  res.render('comments', { comments: comments });
});

// Post comments
app.post('/comments', (req, res) => {
  const name = req.body.name;
  const comment = req.body.comment;
  comments.push({ name: name, comment: comment });
  res.redirect('/comments');
});

// Start server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});