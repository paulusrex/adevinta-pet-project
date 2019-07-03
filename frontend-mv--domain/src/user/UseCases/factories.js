import UserRepositoriesFactories from '../Repositories/factories'
import CreateUserUseCase from '../../../../frontend-all-lib-user/src/user/UseCases/CreateUserUseCase'
import AuthenticateUserUseCase from '../../../../frontend-all-lib-user/src/user/UseCases/AuthenticateUserUseCase'
import RetrieveUserUseCase from '../../../../frontend-all-lib-user/src/user/UseCases/RetrieveUserUseCase'
import UpdateUserUseCase from '../../../../frontend-all-lib-user/src/user/UseCases/UpdateUserUseCase'

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
  static updateUserUseCase = ({config}) =>
    new UpdateUserUseCase({
      repository: UserRepositoriesFactories.skylabUserRepository({config})
    })
}
