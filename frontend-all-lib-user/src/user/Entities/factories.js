import UserEntity from './UserEntity'

export default class UserEntitiesFactories {
  static userEntity = ({id, email, customData}) =>
    new UserEntity({id, email, customData})
}
