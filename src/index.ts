import express from 'express';

import route from './routes/routes'

const app = express();

app.use(express.json());

app.use(route);

const port = '5000';

app.listen(port, () => {
    console.log("App online on port ", port);
});