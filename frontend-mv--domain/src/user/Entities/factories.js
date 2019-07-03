import UserEntity from './UserEntity'

export default class UserEntityFactories {
  static userEntity = ({id, email, customData}) =>
    new UserEntity({id, email, customData})
}
