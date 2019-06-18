import {expect} from 'chai'

import {Entity} from '@s-ui/domain'
import AnemicModel from '@s-ui/domain/lib/AnemicModel'

import MovieEntity from '../../../src/movie/Entities/MovieEntity'

describe('MovieEntity', function() {
  let movie
  const id = '1234'
  const title = 'Origin'

  before(() => {
    movie = new MovieEntity({id, title})
  })

  it('is a class', () => {
    expect(MovieEntity).to.be.a('function')
    expect(movie).to.be.a.instanceOf(MovieEntity)
  })

  it('extends from Entity', () => {
    expect(MovieEntity.prototype).to.be.instanceOf(Entity)
  })

  it('extends from AnemicModel', () => {
    expect(MovieEntity.prototype).to.be.instanceOf(AnemicModel)
  })

  describe('toJSON', () => {
    it('is a method', () => {
      expect(movie)
        .to.have.property('toJSON')
        .and.to.be.a('function')
    })

    it('returns a raw object with the correct properties', () => {
      const expected = {id, title}
      expect(movie.toJSON()).not.to.be.instanceOf(Entity)
      expect(movie.toJSON()).to.deep.equal(expected)
    })

    it('returns a inmutable object', () => {
      expect(movie.toJSON()).not.to.equal(movie.toJSON())
      expect(movie.toJSON()).to.be.deep.equal(movie.toJSON())
    })
  })
})
