import UserEntity from './UserEntity'

export default class UserEntitiesFactories {
  static userEntity = ({id, email, authData}) =>
    new UserEntity({id, email, authData})
}
