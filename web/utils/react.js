// Deps
import React from 'react/addons';
import { curry } from 'ramda';
import { IO } from 'ramda-fantasy';

// render :: ReactElement -> DOM -> IO ReactElement
var render = curry((element, target) => new IO(() => React.render(element, target)));

export { render };
