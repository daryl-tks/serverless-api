'use strict';

module.exports = async (event, context) => {
  const result = {
    body: JSON.stringify(event.body) + '123',
    'content-type': event.headers['content-type'],
  };

  return context.status(200).succeed(result);
};
