import {expect} from 'chai'

import Domain from '../../../src/'
import repositoryFactories from '../../../src/user/Repositories/factories'
import Config from '../../../src/Config'

describe('RetrieveUserUseCase', function() {
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

    const user = await repository.create({email, password})

    const authData = await repository.authenticate({email, password})

    const useCase = domain.get('retrieve_user_use_case')
    expect(useCase).to.exist
    expect(useCase.execute).to.be.a('function')
    const res = await useCase.execute({
      id: user.toJSON().id,
      authData
    })
    expect(res.email).to.be.equal(email)
    expect(res.authData).to.be.null
  })
})
