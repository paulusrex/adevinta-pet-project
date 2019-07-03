import UserRepositoriesFactories from '../Repositories/factories'
import CreateUserUseCase from 'perixo20-mv-user/lib/user/UseCases/CreateUserUseCase'
import AuthenticateUserUseCase from 'perixo20-mv-user/lib/user/UseCases/AuthenticateUserUseCase'
import RetrieveUserUseCase from 'perixo20-mv-user/lib/user/UseCases/RetrieveUserUseCase'
import UpdateUserUseCase from 'perixo20-mv-user/lib/user/UseCases/UpdateUserUseCase'

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
