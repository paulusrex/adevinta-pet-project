import MovieListValueObject from './MovieListValueObject'
import MoviesEntitiesFactories from '../Entities/factories'

export default class MovieValueObjectsFactories {
  static movieListValueObject = ({list}) => {
    return new MovieListValueObject({
      list: list.map(movie =>
        MoviesEntitiesFactories.movieEntity({
          id: movie.id,
          title: movie.title,
          description: movie.description,
          image: movie.image
        })
      )
    })
  }
}
