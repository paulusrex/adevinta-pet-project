import {expect} from 'chai'

import NotFoundMovieError from '../../src/movie/Errors/NotFoundMovieError'
import Domain from '../../src/'

describe('GetDetailMovieUseCase', function() {
  let domain
  const id = 320288
  const title = 'Dark Phoenix'

  beforeEach(() => {
    domain = new Domain()
  })

  it('#execute', async () => {
    const useCase = domain.get('get_movie_detail_use_case')
    expect(useCase).to.exist
    expect(useCase.execute).to.be.a('function')
    const movie = await useCase.execute({id})
    expect(movie.id).to.be.equal(id)
    expect(movie.title).to.be.equal(title)
  })

  it('#execute with notFound', () => {
    const useCase = domain.get('get_movie_detail_use_case')
    expect(useCase).to.exist
    expect(useCase.execute).to.be.a('function')
    useCase
      .execute({id: 98723972934723987984})
      .then(() => expect(false).to.be.true)
      .catch(error => {
        expect(error).to.be.instanceOf(NotFoundMovieError)
      })
  })
})
