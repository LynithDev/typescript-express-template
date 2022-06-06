import { Route } from 'src/handler';

export default {
    method: 'get',
    url: '/search',
    run: (req, res) => {
        res.send('search');
    },
} as Route;
