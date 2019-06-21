import {expect} from 'chai'
import {descriptorsByEnvironmentPatcher} from '@s-ui/test/lib/descriptor-environment-patcher'
import Domain from '../../src/'

descriptorsByEnvironmentPatcher()

let domain
describe.client('SearchMoviesUseCase', function() {
  beforeEach(() => {
    domain = new Domain()
  })

  it('#execute', async () => {
    const useCase = domain.get('search_movies_use_case')
    expect(useCase).to.exist
    expect(useCase.execute).to.be.a('function')
    const movies = await useCase.execute({keyword: 'batman'})
    expect(movies)
      .to.be.instanceOf(Array)
      .and.to.have.length.greaterThan(10)
  })
})

describe.server('SearchMoviesUseCase', function() {
  beforeEach(() => {
    domain = new Domain()
  })

  it('#execute', async () => {
    const useCase = domain.get('search_movies_use_case')
    expect(useCase).to.exist
    expect(useCase.execute).to.be.a('function')
    const movies = await useCase.execute({keyword: 'Superman'})
    expect(movies)
      .to.be.instanceOf(Array)
      .and.to.have.lengthOf(3)
  })
})
