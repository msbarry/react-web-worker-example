export function handle(handlers) {
  self.addEventListener('message', ({ data: { action, data, id } }) => {
    const handler = handlers[action];
    if (typeof handler !== 'function') {
      const error = `No handler for '${handler}'`;
      console.error(error);
      self.postMessage({ id, error });
    } else {
      handler(data, (err, result) => {
        self.postMessage({ id, err, result });
      });
    }
  });
}

export function invoker(worker) {
  let ids = 0;
  return (action, args, callback) => {
    ids++;
    const thisId = ids;
    worker.postMessage({ action, id: thisId, data: args });
    worker.addEventListener('message', function listen({ data: { id, err, result } }) {
      if (id === thisId) {
        worker.removeEventListener(listen);
        callback(err, result);
      }
    });
  };
}
