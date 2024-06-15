// src/index.js
import express from 'express';

const app = express();
const port = process.env.PORT || 8080;

export function bootstrap(){
  app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
  });
  
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}