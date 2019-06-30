import {FetcherFactory} from '@s-ui/domain'
import UserEntityFactories from '../Entities/factories'

import SkylabUserRepository from './SkylabUserRepository'

export default class UserRepositoriesFactories {
  static skylabUserRepository = ({config}) =>
    new SkylabUserRepository({
      config,
      userEntityFactory: UserEntityFactories.userEntity,
      fetcher: FetcherFactory.httpFetcher({config})
    })
}
