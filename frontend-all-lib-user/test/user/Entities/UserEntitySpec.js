import {expect} from 'chai'

import {Entity} from '@s-ui/domain'
import AnemicModel from '@s-ui/domain/lib/AnemicModel'

import UserEntity from '../../../src/user/Entities/UserEntity'

describe('UserEntity', function() {
  let user
  const id = '1234'
  const email = 'john.doe@mail.com'

  before(() => {
    user = new UserEntity({id, email})
  })

  it('is a class', () => {
    expect(UserEntity).to.be.a('function')
    expect(user).to.be.a.instanceOf(UserEntity)
  })

  it('extends from Entity', () => {
    expect(UserEntity.prototype).to.be.instanceOf(Entity)
  })

  it('extends from AnemicModel', () => {
    expect(UserEntity.prototype).to.be.instanceOf(AnemicModel)
  })

  describe('toJSON', () => {
    it('is a method', () => {
      expect(user)
        .to.have.property('toJSON')
        .and.to.be.a('function')
    })

    it('returns a raw object with the correct properties', () => {
      const expected = {id, email}
      expect(user.toJSON()).not.to.be.instanceOf(Entity)
      expect(user.toJSON()).to.deep.equal(expected)
    })

    it('returns a inmutable object', () => {
      expect(user.toJSON()).not.to.equal(user.toJSON())
      expect(user.toJSON()).to.be.deep.equal(user.toJSON())
    })
  })
})
