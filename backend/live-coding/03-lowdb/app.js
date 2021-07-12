const express = require('express');
const cors = require('cors');
const lowDb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const { nanoid } = require('nanoid');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));

// set up lowdb database
const adapter = new FileSync('db.json');
const db = lowDb(adapter);
db.defaults({ posts: [], user: {} }).write();

app.get('/posts', (req, res) => {
    const data = db.get('posts').value();
    res.json(data);
});

app.post('/posts/new', (req, res) => {
    const post = req.body;
    console.log(post) // {}
    db.get('posts').push({ ...post, id: nanoid() }).write();
    res.json({ success: true });
})

app.listen(port, hostname, () => {
    console.log(`Server listening at http://${hostname}:${port}.`);
});
