import calc from './other';

self.onmessage = (event) => {
  const { id, value } = event.data;
  postMessage({ id, value: calc(value) });
};
