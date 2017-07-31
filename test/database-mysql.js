const test = require('ava')
const env = require('../src/utils/env')({
  DATABASE_ENGINE: 'mysql',
  DATABASE_URL: 'mysql://root:root@localhost/auth'
})
const adapter = require('../src/database/adapter')(env)

test('Init', t => {
  adapter.init().then(res => t.truthy(res)).catch(err => t.falsy(res))
})
