'use strict';

module.exports = async (event, context) => {
  const result = {
    body: JSON.stringify({ name: 'Daryl', position: 'Fullstack Developer' }),
    'content-type': event.headers['content-type'],
  };

  return context.status(200).succeed(result);
};
