import {expect} from 'chai'

import Config from '../../src/Config'

describe('Config', function() {
  it('have a key API_HOST', () => {
    const config = new Config()
    expect(config.get('API_HOST')).to.be.a('string')
  })
  it('have a key API_KEY', () => {
    const config = new Config()
    expect(config.get('API_KEY')).to.be.a('string')
  })
})
