import Worker from 'worker!./worker';

const worker = new Worker();
let ids = 0;

export default function (a, cb) {
  ids++;
  const id = ids;
  worker.postMessage({ value: a, id });
  worker.addEventListener('message', function func(e) {
    if (e.data.id === id) {
      worker.removeEventListener('message', func);
      cb(e.data.value);
    }
  }, false);
}
