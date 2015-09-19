import { IO } from 'ramda-fantasy';

//  $ :: String -> IO [DOM]
var $ = function(selector) {
    return new IO(function(){ return document.querySelectorAll(selector); });
};

export { $ };
