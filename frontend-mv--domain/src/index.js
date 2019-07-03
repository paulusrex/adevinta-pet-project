import {EntryPointFactory} from '@s-ui/domain'
import Config from './Config'

import MovieUseCasesFactories from './movie/UseCases/factories'
import UserUseCasesFactories from './user/UseCases/factories'

const config = new Config()

const useCases = {
  get_detail_movie_use_case: MovieUseCasesFactories.getDetailMovieUseCase({
    config
  }),
  search_movies_use_case: MovieUseCasesFactories.searchMoviesUseCase({config}),
  get_trending_movies_use_case: MovieUseCasesFactories.getTrendingMoviesUseCase(
    {
      config
    }
  ),
  create_user_use_case: UserUseCasesFactories.createUserUseCase({
    config
  }),
  authenticate_user_use_case: UserUseCasesFactories.authenticateUserUseCase({
    config
  }),
  retrieve_user_use_case: UserUseCasesFactories.retrieveUserUseCase({
    config
  }),
  update_user_use_case: UserUseCasesFactories.updateUserUseCase({
    config
  })
}

const Domain = EntryPointFactory({useCases, config})

export default Domain
