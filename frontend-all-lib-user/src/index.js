import {EntryPointFactory} from '@s-ui/domain'
import Config from './Config'

import UserUseCasesFactory from './user/UseCases/factories'

const config = new Config()

const useCases = {
  create_user_use_case: UserUseCasesFactory.createUserUseCase({
    config
  })
}

const Domain = EntryPointFactory({useCases, config})

export default Domain
