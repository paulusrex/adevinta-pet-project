import {expect} from 'chai'

import Domain from '../../../src/'
import repositoryFactories from '../../../src/user/Repositories/factories'
import Config from '../../../src/Config'

import AlreadyExistUserError from '../../../src/user/Errors/AlreadyExistUserError'

describe('CreateUserUseCase', function() {
  let domain
  let email
  const password = '123'

  beforeEach(() => {
    domain = new Domain()
    email = `test-${Math.random()}@mail.com`
  })

  it('#execute', async () => {
    const useCase = domain.get('create_user_use_case')
    expect(useCase).to.exist
    expect(useCase.execute).to.be.a('function')
    const user = await useCase.execute({email, password})
    expect(user.id).to.exist
    expect(user.email).to.be.equal(email)
    expect(user.password).not.to.exist
    expect(user.authData).to.be.null
  })

  it('#execute with duplicate email', async () => {
    const config = new Config()
    const repository = repositoryFactories.skylabUserRepository({config})
    await repository.create({email, password})
    const useCase = domain.get('create_user_use_case')
    try {
      await useCase.execute({email, password})
      expect('fail execute').not.to.exist
    } catch (err) {
      expect(err).to.be.instanceOf(AlreadyExistUserError)
    }
  })
})
