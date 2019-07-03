import GenericUserError from 'perixo20-mv-user/lib/user/Errors/GenericUserError'
import AlreadyExistUserError from 'perixo20-mv-user/lib/user/Errors/AlreadyExistUserError'
import WrongCredentialsUserError from 'perixo20-mv-user/lib/user/Errors/WrongCredentialsUserError'
import UpdateUserError from 'perixo20-mv-user/lib/user/Errors/UpdateUserError'

export default class UserErrorsFactories {
  static genericUserError = () => new GenericUserError()
  static alreadyExistUserError = () => new AlreadyExistUserError()
  static wrongCredentialsUserError = () => new WrongCredentialsUserError()
  static updateUserError = () => new UpdateUserError()
}
