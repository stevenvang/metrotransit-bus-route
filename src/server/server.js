// import path from 'Path';
const path = require('path');
const express = require('express');
// import express from 'express';

const publicPath = path.join(__dirname, '../../');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '../../index.html'));
});

app.listen(3000, () => {
  console.log(`Server is up on 3000`);
});
