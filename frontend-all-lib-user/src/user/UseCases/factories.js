import UserRepositoriesFactories from '../Repositories/factories'
import CreateUserUseCase from './CreateUserUseCase'
import AuthenticateUserUseCase from './AuthenticateUserUseCase'
import RetrieveUserUseCase from './RetrieveUserUseCase'

export default class UserUseCasesFactories {
  static createUserUseCase = ({config}) =>
    new CreateUserUseCase({
      repository: UserRepositoriesFactories.skylabUserRepository({config})
    })
  static authenticateUserUseCase = ({config}) =>
    new AuthenticateUserUseCase({
      repository: UserRepositoriesFactories.skylabUserRepository({config})
    })
  static retrieveUserUseCase = ({config}) =>
    new RetrieveUserUseCase({
      repository: UserRepositoriesFactories.skylabUserRepository({config})
    })
}
