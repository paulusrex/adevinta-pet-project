import {EntryPointFactory} from '@s-ui/domain'
import Config from './Config'

import MovieUseCasesFactory from './movie/UseCases/factories'

const config = new Config()

const useCases = {
  get_detail_movie_use_case: MovieUseCasesFactory.getDetailMovieUseCase({
    config
  }),
  search_movies_use_case: MovieUseCasesFactory.searchMoviesUseCase({config}),
  get_trending_movies_use_case: MovieUseCasesFactory.getTrendingMoviesUseCase({
    config
  })
}

const Domain = EntryPointFactory({useCases, config})

export default Domain
