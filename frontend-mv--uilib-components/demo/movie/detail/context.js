import {DomainBuilder} from '@s-ui/studio-utils'
import Domain from 'cvz-skylab-movies'

export default {
  default: {
    domain: DomainBuilder.extend({domain: new Domain()}).build()
  }
}
