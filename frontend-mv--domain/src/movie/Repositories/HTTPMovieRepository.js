import MovieRepository from './movieRepository'

export default class HTTPMovieRepository extends MovieRepository {
  constructor({
    fetcher,
    config,
    movieListValueObjectFactory,
    movieEntityFactory,
    notFoundMovieErrorFactory,
    genericMovieErrorFactory
  }) {
    super()
    this._fetcher = fetcher
    this._config = config
    this._movieListValueObjectFactory = movieListValueObjectFactory
    this._movieEntityFactory = movieEntityFactory
    this._notFoundMovieErrorFactory = notFoundMovieErrorFactory
    this._genericMovieErrorFactory = genericMovieErrorFactory
  }

  async search({keyword}) {
    const API_HOST = this._config.get('API_HOST')
    const API_KEY = this._config.get('API_KEY')
    const {data} = await this._fetcher.get(
      `${API_HOST}/search/movie?api_key=${API_KEY}&query=${keyword}`
    )
    const {results} = data
    const movieListValueObject = this._movieListValueObjectFactory({
      list: results
    })
    return movieListValueObject
  }

  async getTrending() {
    const API_HOST = this._config.get('API_HOST')
    const API_KEY = this._config.get('API_KEY')
    const {data} = await this._fetcher.get(
      `${API_HOST}/movie/popular?api_key=${API_KEY}`
    )
    const {results} = data
    const movieListValueObject = this._movieListValueObjectFactory({
      list: results
    })
    return movieListValueObject
  }

  async detail({id}) {
    const API_HOST = this._config.get('API_HOST')
    const API_KEY = this._config.get('API_KEY')
    let data
    try {
      const res = await this._fetcher.get(
        `${API_HOST}/movie/${id}?api_key=${API_KEY}`
      )
      data = res.data
    } catch (error) {
      throw this._genericMovieErrorFactory()
    }
    if (data.status_code === 6) throw this._notFoundMovieErrorFactory()
    const movie = this._movieEntityFactory({
      id: data.id,
      title: data.title
    })
    return movie
  }
}
