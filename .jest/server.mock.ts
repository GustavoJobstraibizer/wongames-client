const fetch = require('node-fetch')
global.fetch = fetch

import { server } from '../src/utils/mockServer/server'

beforeAll(() => {
  // listen all call on tests
  server.listen()
})

afterEach(() => {
  // reset all handlers in the case it was called
  server.resetHandlers()
})

afterAll(() => {
  // close the server and clear all tests
  server.close()
})
