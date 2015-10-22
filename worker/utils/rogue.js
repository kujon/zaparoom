import { invoker, converge, nthArg, identity } from 'ramda';
import jackrabbit from 'jackrabbit';

// Functional wrapper for jackrabbit queues.
// https://en.wikipedia.org/wiki/Rogue_(comics)

// --------------- Queue ---------------

// queueConnect :: Connection -> Queue -> Queue
var queueConnect = converge(nthArg(0), nthArg(1), invoker(1, 'connect'));

// consume :: (Data -> (String -> Void) -> (Void -> Void) -> Message) -> Options -> Queue -> Queue
var consume = converge(nthArg(0), nthArg(2), invoker(2, 'consume'), identity);

// ------------- Exchange --------------

// queue :: Options -> Exchange -> Queue
var queue = invoker(1, 'queue');

// exchangeConnect :: Connection -> Exchange -> Exchange
var exchangeConnect = invoker(1, 'connect');

// publish :: String -> Options -> Exchange -> Exchange
var publish = invoker(2, 'publish');

// ------------ Jack Rabbit ------------

// default :: JackRabbit -> Exchange
var defaultExchange = invoker(0, 'default');

// directExchange :: String -> JackRabbit -> Exchange
var directExchange = invoker(1, 'direct');

// fanoutExchange :: String -> JackRabbit -> Exchange
var fanoutExchange = invoker(1, 'fanout');

// topic :: String -> JackRabbit -> Exchange
var topicExchange = invoker(1, 'topic');

// closeConnection :: (String -> Void) -> JackRabbit -> JackRabbit
var closeConnection = converge(nthArg(0), nthArg(1), invoker(1, 'close'));

export {
    jackrabbit as Rogue,
    queueConnect,
    consume,
    queue,
    exchangeConnect,
    publish,
    defaultExchange,
    directExchange,
    fanoutExchange,
    topicExchange,
    closeConnection
};
