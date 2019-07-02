import {FetcherFactory} from '@s-ui/domain'
import UserEntityFactories from '../Entities/factories'

import SkylabUserRepository from './SkylabUserRepository'
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
