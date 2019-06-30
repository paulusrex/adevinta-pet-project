import GenericUserError from './GenericUserError'
import AlreadyExistUserError from './AlreadyExistUserError'

export default class MovieErrorsFactories {
  static genericUserError = () => new GenericUserError()
  static alreadyExistUserError = () => new AlreadyExistUserError()
}
