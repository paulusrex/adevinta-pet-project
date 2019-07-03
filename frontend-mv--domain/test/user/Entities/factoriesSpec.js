import {expect} from 'chai'

import UserEntity from '../../../src/user/Entities/UserEntity'
import UserEntitiesFactories from '../../../src/user/Entities/factories'

describe('UserEntitiesFactories -> static method to instantiate a UserEntity', function() {
  it('is a class', () => {
    expect(UserEntitiesFactories).to.be.a('function')
    expect(new UserEntitiesFactories()).to.be.instanceOf(UserEntitiesFactories)
  })

  describe('UserEntity', function() {
    const id = '1234'
    const email = 'john.doe@mail.com'

    it('is a static method', () => {
      expect(UserEntitiesFactories.userEntity).to.be.a('function')
    })

    it('returns a UserEntity instance', () => {
      const userEntity = UserEntitiesFactories.userEntity({id, email})
      expect(userEntity).to.be.instanceOf(UserEntity)
    })

    it('returns a new UserEntity with same data of toJSON', () => {
      const originalUserEntity = UserEntitiesFactories.userEntity({
        id,
        email
      })
      const copyUserEntity = UserEntitiesFactories.userEntity(
        originalUserEntity.toJSON()
      )
      expect(copyUserEntity).to.be.instanceOf(UserEntity)
      expect(copyUserEntity.toJSON()).to.deep.equal(originalUserEntity.toJSON())
    })
  })
})
