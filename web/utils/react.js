import React from 'react/addons';
import { curry, compose, useWith, call, identity } from 'ramda';
import { IO } from 'ramda-fantasy';

// createElement :: ReactClass -> Object -> ReactElement
var createElement = useWith(call, React.createFactory, identity);

// render :: ReactElement -> DOM -> IO ReactElement
var render = curry((element, target) => new IO(() => React.render(element, target)));

// renderToString :: ReactClass -> Object -> String
var renderToString = compose(React.renderToString, createElement);

export { createElement, render, renderToString };
