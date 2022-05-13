'use strict';

module.exports = async (event, context) => {
  // const result = {
  //   body: JSON.stringify({ name: 'Daryl', position: 'Fullstack Developer' }),
  //   'content-type': event.headers['content-type'],
  // };

  const result = {
    status: 'Received input: ' + JSON.stringify(event.body),
  };

  return context.status(200).succeed(result);
};
