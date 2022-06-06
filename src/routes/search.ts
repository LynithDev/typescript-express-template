import { Route } from 'src/handler';

export default {
    method: 'get',
    run: (req, res) => {
        res.send('search');
    },
} as Route;
