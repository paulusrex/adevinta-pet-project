import {expect} from 'chai'

import MovieValueObjectsFactories from '../../../src/movie/ValueObjects/factories'

import MovieListValueObject from '../../../src/movie/ValueObjects/MovieListValueObject'

describe('MovieValueObjectsFactories -> static method to instatiate MovieValueObject', function() {
  const id = '1234'
  const title = 'Origin'

  it('is a class', () => {
    expect(MovieValueObjectsFactories).to.be.a('function')
    expect(new MovieValueObjectsFactories()).to.be.instanceOf(
      MovieValueObjectsFactories
    )
  })

  describe('movieListValueObject', function() {
    it('is a static method', () => {
      expect(MovieValueObjectsFactories.movieListValueObject).to.be.a(
        'function'
      )
    })

    it('returns an instance of MovieListValueObject', () => {
      const list = [{id, title}]

      const movieListValueObject = MovieValueObjectsFactories.movieListValueObject(
        {
          list
        }
      )

      expect(movieListValueObject).to.be.instanceOf(MovieListValueObject)
    })

    it('returns a new MovieListValueObject with same data of toJSON', () => {
      const list = [{id, title}]

      const originalMovieListValueObject = MovieValueObjectsFactories.movieListValueObject(
        {
          list
        }
      )
      const copyMovieListValueObject = MovieValueObjectsFactories.movieListValueObject(
        {list: originalMovieListValueObject.toJSON()}
      )
      expect(copyMovieListValueObject).to.be.instanceOf(MovieListValueObject)
      expect(copyMovieListValueObject.toJSON()).to.deep.equal(
        originalMovieListValueObject.toJSON()
      )
    })
  })
})
