import {expect} from 'chai'

import MovieEntity from '../../../src/movie/Entities/MovieEntity'
import MoviesEntitiesFactories from '../../../src/movie/Entities/factories'

describe('MoviesEntitiesFactories -> static method to instantiate a MovieEntity', function() {
  it('is a class', () => {
    expect(MoviesEntitiesFactories).to.be.a('function')
    expect(new MoviesEntitiesFactories()).to.be.instanceOf(
      MoviesEntitiesFactories
    )
  })

  describe('movieEntity', function() {
    const id = '1234'
    const title = 'Origin'
    const image = 'http:.../...'
    const description = 'test-description'

    it('is a static method', () => {
      expect(MoviesEntitiesFactories.movieEntity).to.be.a('function')
    })

    it('returns a MovieEntity instance', () => {
      const movieEntity = MoviesEntitiesFactories.movieEntity({
        id,
        title,
        image,
        description
      })
      expect(movieEntity).to.be.instanceOf(MovieEntity)
    })

    it('returns a new MovieEntity with same data of toJSON', () => {
      const originalMovieEntity = MoviesEntitiesFactories.movieEntity({
        id,
        title,
        image,
        description
      })
      const copyMovieEntity = MoviesEntitiesFactories.movieEntity(
        originalMovieEntity.toJSON()
      )
      expect(copyMovieEntity).to.be.instanceOf(MovieEntity)
      expect(copyMovieEntity.toJSON()).to.deep.equal(
        originalMovieEntity.toJSON()
      )
    })
  })
})
