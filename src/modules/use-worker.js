import Worker from 'worker!./worker';
import { invoker } from './actors';

const invoke = invoker(new Worker());

export default function (a, cb) {
  invoke('add', a, (err, value) => {
    cb(value);
  });
}
