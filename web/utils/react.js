// Deps
import React from 'react/addons';
import { curry } from 'ramda';
import { IO } from 'ramda-fantasy';

// render :: ReactElement -> DOM -> IO ReactElement
var render = curry(function(element, target) {
    return new IO(function() { return React.render(element, target); });
});

export { render };
