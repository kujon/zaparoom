import { curry } from 'ramda';
import { renderToString } from './react';
import App from '../ui/components/app';

// formatResponse :: * -> Request -> Response -> Void
var formatResponse = curry((data, req, res) => {
    res.format({
        'text/html': () => {
            // Render the app to string.
            const content = renderToString(App, data, null, null);
            // Render the response.
            res.render('index.ejs', {title: 'zaparoom', content: content});
        },
        'application/json': () => res.json(data),
        default: () => res.status(406).send('Not Acceptable')
    });
});

export { formatResponse };
