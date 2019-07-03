import GenericUserError from '../../../../frontend-all-lib-user/src/user/Errors/GenericUserError'
import AlreadyExistUserError from '../../../../frontend-all-lib-user/src/user/Errors/AlreadyExistUserError'
import WrongCredentialsUserError from '../../../../frontend-all-lib-user/src/user/Errors/WrongCredentialsUserError'
import UpdateUserError from '../../../../frontend-all-lib-user/src/user/Errors/UpdateUserError'

export default class MovieErrorsFactories {
  static genericUserError = () => new GenericUserError()
  static alreadyExistUserError = () => new AlreadyExistUserError()
  static wrongCredentialsUserError = () => new WrongCredentialsUserError()
  static updateUserError = () => new UpdateUserError()
}
