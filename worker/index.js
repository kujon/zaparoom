import { DEFAULT_QUEUE } from './constants';
import { Rogue, defaultExchange, queue, consume } from './utils/rogue';
import handleDefault from './default/handle';

// rogue :: JackRabbit
const rogue = Rogue(process.env.RABBIT_URL);

// exchange :: Exchange
const exchange = defaultExchange(rogue);

// defaultQueue :: Queue
const defaultQueue = queue({name: DEFAULT_QUEUE}, exchange);

// Specify handler for messages incoming to the default queue.
consume(handleDefault, null, defaultQueue);
