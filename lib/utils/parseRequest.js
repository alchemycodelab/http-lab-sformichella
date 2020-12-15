module.exports = rawRequest => {
  const newLineSplit = rawRequest.split('\r\n');
  const [method, path] = newLineSplit[0].split(' ');

  const bodyIndex = newLineSplit.indexOf('') + 1;

  if(!bodyIndex) {
    return { method, path };
  }
  
  const body = newLineSplit[bodyIndex];

  return { method, path, body };
};
