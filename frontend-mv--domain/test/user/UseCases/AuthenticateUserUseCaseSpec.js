import {expect} from 'chai'

import Domain from '../../../src/'
import repositoryFactories from '../../../src/user/Repositories/factories'
import Config from '../../../src/Config'

import WrongCredentialsUserError from 'perixo20-mv-user/lib/user/Errors/WrongCredentialsUserError'

describe('AuthenticateUserUseCase', function() {
  this.timeout(5000)
  let domain
  let email
  const password = '123'

  beforeEach(() => {
    domain = new Domain()
    email = `test-${Math.random()}@mail.com`
  })

  it('#execute', async () => {
    const config = new Config()
    const repository = repositoryFactories.skylabUserRepository({config})
    await repository.create({email, password})

    const useCase = domain.get('authenticate_user_use_case')
    expect(useCase).to.exist
    expect(useCase.execute).to.be.a('function')
    const authData = await useCase.execute({email, password})
    expect(authData).to.be.a('object')
  })

  it('#execute with wrong email', async () => {
    const config = new Config()
    const repository = repositoryFactories.skylabUserRepository({config})
    await repository.create({email, password})

    const useCase = domain.get('authenticate_user_use_case')
    try {
      await useCase.execute({
        email: `wrong-test-${Math.random()}@mail.com`,
        password
      })
      expect('fail execute').not.to.exist
    } catch (err) {
      expect(err).to.be.instanceOf(WrongCredentialsUserError)
    }
  })

  it('#execute with wrong password', async () => {
    const config = new Config()
    const repository = repositoryFactories.skylabUserRepository({config})
    await repository.create({email, password})

    const useCase = domain.get('authenticate_user_use_case')
    try {
      await useCase.execute({email, password: 'wrong-password'})
      expect('fail execute').not.to.exist
    } catch (err) {
      expect(err).to.be.instanceOf(WrongCredentialsUserError)
    }
  })
})
