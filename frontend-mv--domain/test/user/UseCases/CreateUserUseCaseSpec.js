import {expect} from 'chai'

import Domain from '../../../src/'
import repositoryFactories from '../../../src/user/Repositories/factories'
import Config from '../../../src/Config'

import AlreadyExistUserError from 'perixo20-mv-user/lib/user/Errors/AlreadyExistUserError'

describe('CreateUserUseCase', function() {
  let domain
  let email
  const password = '123'
  const customData = {favs: []}

  beforeEach(() => {
    domain = new Domain()
    email = `test-${Math.random()}@mail.com`
  })

  it('#execute', async () => {
    const useCase = domain.get('create_user_use_case')
    expect(useCase).to.exist
    expect(useCase.execute).to.be.a('function')
    const user = await useCase.execute({email, password, customData})
    expect(user.id).to.exist
    expect(user.email).to.be.equal(email)
    expect(user.password).not.to.exist
    expect(user.customData).to.be.deep.equal(customData)
  })

  it('#execute with duplicate email', async () => {
    const config = new Config()
    const repository = repositoryFactories.skylabUserRepository({config})
    await repository.create({email, password, customData})
    const useCase = domain.get('create_user_use_case')
    try {
      await useCase.execute({email, password})
      expect('fail execute').not.to.exist
    } catch (err) {
      expect(err).to.be.instanceOf(AlreadyExistUserError)
    }
  })
})
