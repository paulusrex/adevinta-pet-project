import {expect} from 'chai'

import Domain from '../../../src/'

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
    expect(user.email).to.be.equal(email)
    expect(user.password).not.to.exist
  })
})
