import {EntryPointFactory} from '@s-ui/domain'
import Config from './Config'
import MovieUseCasesFactory from './movie/UseCases/factories'
var config = new Config()
var useCases = {
  search_movies_use_case: MovieUseCasesFactory.searchMoviesUseCase({
    config: config
  })
}
var Domain = EntryPointFactory({
  useCases: useCases,
  config: config
})
export default Domain
