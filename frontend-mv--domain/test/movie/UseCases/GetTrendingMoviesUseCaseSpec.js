import {expect} from 'chai'

import Domain from '../../../src'

describe('GetTrendingMoviesUseCase', function() {
  let domain

  beforeEach(() => {
    domain = new Domain()
  })

  it('#execute', async () => {
    const useCase = domain.get('get_trending_movies_use_case')
    expect(useCase).to.exist
    expect(useCase.execute).to.be.a('function')
    const movies = await useCase.execute()
    expect(movies)
      .to.have.property('list')
      .and.to.be.instanceOf(Array)
      .and.to.have.length.greaterThan(10)
  })
})
