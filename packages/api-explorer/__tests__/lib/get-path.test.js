const getPath = require('../../src/lib/get-path');
const Oas = require('../../src/lib/Oas.js');

const petstore = require('../fixtures/petstore/oas');

const swagger = new Oas(petstore);

describe('getSchema', () => {
  it('should return path from swagger file', () => {
    const doc = { swagger: { path: '/user/logout' }, api: { method: 'get' } };

    expect(getPath(swagger, doc)).toEqual({
      get: {
        tags: ['user'],
        summary: 'Logs out current logged in user session',
        description: '',
        operationId: 'logoutUser',
        parameters: [],
        responses: {
          default: {
            description: 'successful operation',
          },
        },
      },
    });
  });
  it('should return parameters object if doc does not have swagger property', () => {
    const doc = { api: { method: 'get' } };

    expect(getPath(swagger, doc)).toEqual({
      parameters: [],
    });
  });
});
