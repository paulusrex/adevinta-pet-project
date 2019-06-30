import {expect} from 'chai'

import MovieListValueObject from '../../../src/movie/ValueObjects/MovieListValueObject'

import {ValueObject} from '@s-ui/domain'
import MovieEntity from '../../../src/movie/Entities/MovieEntity'

describe('MovieListValueObject', function() {
  const id = '1234'
  const title = 'Origin'
  const image = 'http:.../...'
  const description = 'test-description'
  let movieEntity, movieListValueObject

  before(() => {
    movieEntity = new MovieEntity({id, title, image, description})
    movieListValueObject = new MovieListValueObject({list: [movieEntity]})
  })

  it('is a class', () => {
    expect(MovieListValueObject).to.be.a('function')
    expect(movieListValueObject).to.be.a.instanceOf(MovieListValueObject)
  })

  it('extends from ValueObject', () => {
    expect(MovieListValueObject.prototype).to.be.instanceOf(ValueObject)
  })

  describe('toJSON', () => {
    it('is a method', () => {
      expect(movieListValueObject)
        .to.have.property('toJSON')
        .and.to.be.a('function')
    })

    it('returns a raw object with the correct properties', () => {
      const expected = [{id, title, image, description}]
      expect(movieListValueObject.toJSON()).not.to.be.instanceOf(ValueObject)
      expect(movieListValueObject.toJSON())
        .to.be.instanceOf(Array)
        .and.to.have.lengthOf(1)
      expect(movieListValueObject.toJSON()).to.deep.equal(expected)
    })

    it('returns a inmutable object', () => {
      expect(movieListValueObject.toJSON()).not.to.equal(
        movieListValueObject.toJSON()
      )
      expect(movieListValueObject.toJSON()).to.be.deep.equal(
        movieListValueObject.toJSON()
      )
    })
  })
})
