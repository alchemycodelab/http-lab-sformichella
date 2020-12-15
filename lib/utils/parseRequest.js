module.exports = rawRequest => {
  const newLineSplit = rawRequest.split('\r\n');
  const [method, path] = newLineSplit[0].split(' ');

  const bodyIndex = newLineSplit.indexOf('') + 1;
  const body = newLineSplit[bodyIndex];

  if(!bodyIndex) return { method, path };
  return { method, path, body };
};
