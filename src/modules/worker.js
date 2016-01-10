import calc from './other';
import { handle } from './actors';

handle({
  add(value, cb) {
    cb(undefined, calc(value));
  }
});
