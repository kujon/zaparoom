import React from 'react/addons';
import { map, head } from 'ramda';
import App from './components/app';
import { $ } from '../utils/dom';
import { render } from '../utils/react';

// mountNode :: IO DOM
const mountNode = map(head, $('#app-mount'));
// renderApp :: DOM -> IO ReactElement
const renderApp = render(React.createElement(App));
// dom :: IO ReactElement
const dom = renderApp(mountNode.runIO());

// Do the nasty side-effects.
dom.runIO();
