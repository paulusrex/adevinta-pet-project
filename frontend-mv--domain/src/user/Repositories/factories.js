import {FetcherFactory} from '@s-ui/domain'
import UserEntityFactories from '../Entities/factories'

import SkylabUserRepository from 'perixo20-mv-user/lib/user/Repositories/SkylabUserRepository'
import UserErrorFactories from '../Errors/factories'

export default class UserRepositoriesFactories {
  static skylabUserRepository = ({config}) =>
    new SkylabUserRepository({
      config,
      userEntityFactory: UserEntityFactories.userEntity,
      fetcher: FetcherFactory.httpFetcher({config}),
      genericUserErrorFactory: UserErrorFactories.genericUserError,
      alreadyExistUserErrorFactory: UserErrorFactories.alreadyExistUserError,
      wrongCredentialsUserErrorFactory:
        UserErrorFactories.wrongCredentialsUserError,
      updateUserErrorFactory: UserErrorFactories.updateUserError
    })
}
