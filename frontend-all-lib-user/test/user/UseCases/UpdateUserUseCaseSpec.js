import {expect} from 'chai'

import Domain from '../../../src/'
import RepositoryFactories from '../../../src/user/Repositories/factories'
import UserEntitiesFactories from '../../../src/user/Entities/factories'
import Config from '../../../src/Config'

describe('UpdateUserUseCase', function() {
  this.timeout(5000)
  let domain
  let email
  const password = '123'
  const customData = {favs: ['234']}
  const expectedCustomData = {favs: ['567', 'abc']}

  beforeEach(() => {
    domain = new Domain()
    email = `test-${Math.random()}@mail.com`
  })

  it('#execute', async () => {
    const config = new Config()
    const repository = RepositoryFactories.skylabUserRepository({config})

    const user = await repository.create({email, password, customData})
    const {id} = user.toJSON()

    const authData = await repository.authenticate({email, password})

    const useCase = domain.get('update_user_use_case')
    expect(useCase).to.exist
    expect(useCase.execute).to.be.a('function')
    debugger // eslint-disable-line
    const userModified = UserEntitiesFactories.userEntity({
      ...user.toJSON(),
      customData: expectedCustomData
    })
    const res = await useCase.execute({
      user: userModified,
      authData
    })
    expect(res).to.be.true

    const modifiedUserEntity = await repository.retrieve({id, authData})
    const modifiedUserJSON = modifiedUserEntity.toJSON()
    debugger // eslint-disable-line
    expect(modifiedUserJSON).to.have.property('customData')
    expect(modifiedUserJSON.customData.favs)
      .and.to.be.instanceOf(Array)
      .and.to.have.lengthOf(2)
    expect(modifiedUserJSON.customData.favs[0]).to.be.equal('567')
    expect(modifiedUserJSON.customData.favs[1]).to.be.equal('abc')
  })
})
