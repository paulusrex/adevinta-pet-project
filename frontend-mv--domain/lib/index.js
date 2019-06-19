import { EntryPointFactory } from '@s-ui/domain';
import Config from './Config';
import MovieUseCasesFactory from './movie/UseCases/factories';
var config = new Config();
var useCases = {
  get_detail_movie_use_case: MovieUseCasesFactory.getDetailMovieUseCase({
    config: config
  }),
  search_movies_use_case: MovieUseCasesFactory.searchMoviesUseCase({
    config: config
  }),
  get_trending_movies_use_case: MovieUseCasesFactory.getTrendingMoviesUseCase({
    config: config
  })
};
var Domain = EntryPointFactory({
  useCases: useCases,
  config: config
});
export default Domain;