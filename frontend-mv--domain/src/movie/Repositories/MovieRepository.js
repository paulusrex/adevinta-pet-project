import {Repository} from '@s-ui/domain'

export default class MovieRepository extends Repository {
  search() {
    throw new Error('[MovieRepository#search]')
  }
  trending() {
    throw new Error('[MovieRepository#trending]')
  }
  detail() {
    throw new Error('[MovieRepository#detail]')
  }
}
