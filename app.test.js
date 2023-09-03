const server = require('./app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe("POST /cities", () => {

  it("when requesting the list of cities", async () => {
    const res = await requestWithSupertest.get('/cities');
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));

  })

})
