import request from '../request';

describe('request', () => {
  describe('stubbing successful response', () => {
    beforeEach(() => {
      const res = new Response('{"hello":"world"}', {
        status: 200,
        headers: { 'Content-type': 'application/json' }
      });
      spyOn(window, 'fetch').and.returnValue(Promise.resolve(res));
    });

    it('should format the response correctly', (done) => {
      request('/thisurliscorrect')
        .catch(done)
        .then((json) => {
          expect(json.hello).toEqual('world');
          done();
        });
    });
  });

  describe('stubbing error response', () => {
    beforeEach(() => {
      const res = new Response('', {
        status: 404,
        statusText: 'Not Found',
        headers: { 'Content-type': 'application/json' }
      });
      spyOn(window, 'fetch').and.returnValue(Promise.resolve(res));
    });

    it('should catch errors', (done) => {
      request('/thisurldoesntexist')
        .catch((err) => {
          expect(err.response.status).toEqual(404);
          expect(err.response.statusText).toEqual('Not Found');
          done();
        });
    });
  });
});
