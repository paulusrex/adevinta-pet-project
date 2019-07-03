import {EntryPointFactory} from '@s-ui/domain'
import Config from './Config'

import UserUseCasesFactory from './user/UseCases/factories'

const config = new Config()

const useCases = {
  create_user_use_case: UserUseCasesFactory.createUserUseCase({
    config
  }),
  authenticate_user_use_case: UserUseCasesFactory.authenticateUserUseCase({
    config
  }),
  retrieve_user_use_case: UserUseCasesFactory.retrieveUserUseCase({
    config
  }),
  update_user_use_case: UserUseCasesFactory.updateUserUseCase({
    config
  })
}

const Domain = EntryPointFactory({useCases, config})

export default Domain
