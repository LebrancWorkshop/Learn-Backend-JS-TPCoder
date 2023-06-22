import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello API');
});

app.listen(8083, () => {
  console.log('API server started on port 8083');
});
