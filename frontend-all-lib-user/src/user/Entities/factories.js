import UserEntity from './UserEntity'

export default class UserEntitiesFactories {
  static userEntity = ({id, email}) => new UserEntity({id, email})
}
