import UserRepositoriesFactories from '../Repositories/factories'
import CreateUserUseCase from './CreateUserUseCase'

export default class UserUseCasesFactories {
  static createUserUseCase = ({config}) =>
    new CreateUserUseCase({
      config,
      repository: UserRepositoriesFactories.skylabUserRepository({config})
    })
}
