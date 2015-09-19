import { IO } from 'ramda-fantasy';

//  $ :: String -> IO [DOM]
var $ = selector => new IO(() => document.querySelectorAll(selector));

export { $ };
