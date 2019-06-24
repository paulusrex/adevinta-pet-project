import MovieDomain from 'cvz-skylab-movies'

export default async () => {
  return {
    domain: new MovieDomain()
  }
}
