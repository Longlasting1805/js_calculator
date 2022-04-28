// import { Express } from 'express';

const path = require('path')
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const publicpath = path.join(__dirname, '..', 'public');

app.use(express.static(publicpath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicpath, 'index.js'));
})

app.listen(port, () => {
    console.log(`server is up on port ${port}!`);
});