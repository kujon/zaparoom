import { DEFAULT_QUEUE } from './constants';
import { Rouge, defaultExchange, queue, consume } from './utils/rouge';
import handleDefault from './default/handle';

// rouge :: JackRabbit
const rouge = Rouge(process.env.RABBIT_URL);

// exchange :: Exchange
const exchange = defaultExchange(rouge);

// defaultQueue :: Queue
const defaultQueue = queue({name: DEFAULT_QUEUE}, exchange);

// Specify handler for messages incoming to the default queue.
consume(handleDefault, null, defaultQueue);
