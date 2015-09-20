import { renderToString } from '../../utils/react';
import App from '../components/app';

export default function setup(context) {
    context.get('/', (req, res) => {
        // Render the app to string.
        const content = renderToString(App, {}, null, null);
        // Render the response.
        res.render('index.ejs', {title: 'zaparoom', content: content});
    });
}
