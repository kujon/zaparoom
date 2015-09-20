// We're going to be dealing with jsx a lot.
import { install as installJSX } from 'node-jsx';
installJSX();

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import routes from './ui/routes/setup';

// Configure the port to listen on.
const port  = process.env.PORT || 5000;

// Fire up express.
const app   = express();

// Serve static assets from web/public
app.use(express.static(path.join(__dirname, 'public')));
// Enable access to static assets in web/build as well
app.use(express.static(path.join(__dirname, 'build')));
// Use the body parser as the middleware
app.use(bodyParser.urlencoded({extended: false}));
// Set view path
app.set('views', path.join(__dirname, 'views'));
// Set ejs as templating engine.
app.set('view engine', 'ejs');

// Setup all routes.
routes(app);

// Start listening
app.listen(port);
console.log('listening on port ' + port);
