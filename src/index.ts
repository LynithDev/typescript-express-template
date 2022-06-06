import express from 'express';
import 'dotenv/config';
import Handler from './handler';

const app = express();
const PORT = process.env.PORT || 8080;

const handler = new Handler(app);
handler.listen();

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });
