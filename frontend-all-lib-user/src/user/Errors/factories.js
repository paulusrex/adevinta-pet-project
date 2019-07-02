import GenericUserError from './GenericUserError'
import AlreadyExistUserError from './AlreadyExistUserError'
import WrongCredentialsUserError from './WrongCredentialsUserError'

export default class MovieErrorsFactories {
  static genericUserError = () => new GenericUserError()
  static alreadyExistUserError = () => new AlreadyExistUserError()
  static wrongCredentialsUserError = () => new WrongCredentialsUserError()
}
