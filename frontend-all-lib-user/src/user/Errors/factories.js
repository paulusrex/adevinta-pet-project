import GenericUserError from './GenericUserError'
import AlreadyExistUserError from './AlreadyExistUserError'
import WrongCredentialsUserError from './WrongCredentialsUserError'
import UpdateUserError from './UpdateUserError'

export default class MovieErrorsFactories {
  static genericUserError = () => new GenericUserError()
  static alreadyExistUserError = () => new AlreadyExistUserError()
  static wrongCredentialsUserError = () => new WrongCredentialsUserError()
  static updateUserError = () => new UpdateUserError()
}
