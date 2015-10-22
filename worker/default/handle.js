// Handles all tasks given to the default queue.

// Data -> (String -> Void) -> (Void -> Void) -> Message
export default (data, ack, nack, msg) => {
    console.log('Message received', data, ack, nack, msg);
};
