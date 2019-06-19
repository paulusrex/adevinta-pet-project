import MovieRepository from './MovieRepository'

const rawMovieList = [
  {
    id: 268,
    vote_average: 7.1,
    title: 'Batman',
    popularity: 27.259,
    poster_path: '/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg',
    original_title: 'Batman',
    overview:
      "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker, who has seized control of Gotham's underworld.",
    release_date: '1989-06-23'
  },
  {
    id: 2661,
    vote_average: 6.2,
    title: 'Batman',
    popularity: 9.34,
    poster_path: '/udDVJXtAFsQ8DimrXkVFqy4DGEQ.jpg',
    original_title: 'Batman',
    overview:
      'The Dynamic Duo faces four super-villains who plan to hold the world for ransom with the help of a secret invention that instantly dehydrates people.',
    release_date: '1966-07-30'
  },
  {
    id: 272,
    vote_average: 7.6,
    title: 'Batman Begins',
    popularity: 34.006,
    poster_path: '/dr6x4GyyegBWtinPBzipY02J2lV.jpg',
    original_title: 'Batman Begins',
    overview:
      'Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.',
    release_date: '2005-06-10'
  },
  {
    id: 364,
    vote_average: 6.8,
    title: 'Batman Returns',
    popularity: 22.032,
    poster_path: '/jKBjeXM7iBBV9UkUcOXx3m7FSHY.jpg',
    original_title: 'Batman Returns',
    overview:
      "Having defeated the Joker, Batman now faces the Penguin - a warped and deformed individual who is intent on being accepted into Gotham society. Crooked businessman Max Schreck is coerced into helping him become Mayor of Gotham and they both attempt to expose Batman in a different light. Selina Kyle, Max's secretary, is thrown from the top of a building and is transformed into Catwoman - a mysterious figure who has the same personality disorder as Batman. Batman must attempt to clear his name, all the time deciding just what must be done with the Catwoman.",
    release_date: '1992-06-19'
  },
  {
    id: 415,
    vote_average: 4.2,
    title: 'Batman & Robin',
    popularity: 19.815,
    poster_path: '/79AYCcxw3kSKbhGpx1LiqaCAbwo.jpg',
    original_title: 'Batman & Robin',
    overview:
      'Along with crime-fighting partner Robin and new recruit Batgirl, Batman battles the dual threat of frosty genius Mr. Freeze and homicidal horticulturalist Poison Ivy. Freeze plans to put Gotham City on ice, while Ivy tries to drive a wedge between the dynamic duo.',
    release_date: '1997-06-20'
  },
  {
    id: 414,
    vote_average: 5.3,
    title: 'Batman Forever',
    popularity: 16.594,
    poster_path: '/eTMrHEhlFPHNxpqGwpGGTdAa0xV.jpg',
    original_title: 'Batman Forever',
    overview:
      "The Dark Knight of Gotham City confronts a dastardly duo: Two-Face and the Riddler. Formerly District Attorney Harvey Dent, Two-Face believes Batman caused the courtroom accident which left him disfigured on one side. And Edward Nygma, computer-genius and former employee of millionaire Bruce Wayne, is out to get the philanthropist; as The Riddler. Former circus acrobat Dick Grayson, his family killed by Two-Face, becomes Wayne's ward and Batman's new partner Robin.",
    release_date: '1995-06-16'
  },
  {
    id: 324849,
    vote_average: 7.2,
    title: 'The Lego Batman Movie',
    popularity: 21.827,
    poster_path: '/1pHOqpdCYNmtRVJs6pGKQKttrPm.jpg',
    original_title: 'The Lego Batman Movie',
    overview:
      'In the irreverent spirit of fun that made "The Lego Movie" a worldwide phenomenon, the self-described leading man of that ensemble—Lego Batman—stars in his own big-screen adventure. But there are big changes brewing in Gotham, and if he wants to save the city from The Joker’s hostile takeover, Batman may have to drop the lone vigilante thing, try to work with others and maybe, just maybe, learn to lighten up.',
    release_date: '2017-02-08'
  },
  {
    id: 485942,
    vote_average: 5.6,
    title: 'Batman Ninja',
    popularity: 14.996,
    poster_path: '/5xSB0Npkc9Fd9kahKBsq9P4Cdzp.jpg',
    original_title: 'ニンジャバットマン',
    overview:
      "Gorilla Grodd's time displacement machine transports many of Batman's worst enemies to feudal Japan, along with the Dark Knight and a few of his allies.",
    release_date: '2018-04-24'
  },
  {
    id: 22855,
    vote_average: 6.9,
    title: 'Superman/Batman: Public Enemies',
    popularity: 15.832,
    poster_path: '/bJBZxzFHfTAOtBg8fOCCaBmh4hF.jpg',
    original_title: 'Superman/Batman: Public Enemies',
    overview:
      'United States President Lex Luthor uses the oncoming trajectory of a Kryptonite meteor to frame Superman and declare a $1 billion bounty on the heads of the Man of Steel and his ‘partner in crime’, Batman. Heroes and villains alike launch a relentless pursuit of Superman and Batman, who must unite—and recruit help—to try and stave off the action-packed onslaught, stop the meteor Luthors plot.',
    release_date: '2009-09-29'
  },
  {
    id: 209112,
    vote_average: 5.8,
    title: 'Batman v Superman: Dawn of Justice',
    popularity: 40.77,
    poster_path: '/cGOPbv9wA5gEejkUN892JrveARt.jpg',
    original_title: 'Batman v Superman: Dawn of Justice',
    overview:
      'Fearing the actions of a god-like Super Hero left unchecked, Gotham City’s own formidable, forceful vigilante takes on Metropolis’s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it’s ever known before.',
    release_date: '2016-03-23'
  },
  {
    id: 382322,
    vote_average: 6.3,
    title: 'Batman: The Killing Joke',
    popularity: 13.041,
    poster_path: '/zm0ODjtfJfJW0W269LqsQl5OhJ8.jpg',
    original_title: 'Batman: The Killing Joke',
    overview:
      'As Batman hunts for the escaped Joker, the Clown Prince of Crime attacks the Gordon family to prove a diabolical point mirroring his own fall into madness.',
    release_date: '2016-07-21'
  },
  {
    id: 69735,
    vote_average: 7.2,
    title: 'Batman: Year One',
    popularity: 12.057,
    poster_path: '/bI1YVuhBN6Vws1GP9Mf01DyhC2s.jpg',
    original_title: 'Batman: Year One',
    overview:
      "Two men come to Gotham City: Bruce Wayne after years abroad feeding his lifelong obsession for justice and Jim Gordon after being too honest a cop with the wrong people elsewhere. After learning painful lessons about the city's corruption on its streets and police department respectively, this pair learn how to fight back their own way. With that, Gotham's evildoers from top to bottom are terrorized by the mysterious Batman and the equally heroic Gordon is assigned to catch him by comrades who both hate and fear him themselves. In the ensuing manhunt, both find much in common as the seeds of an unexpected friendship are laid with additional friends and rivals helping to start the legend.",
    release_date: '2011-09-27'
  },
  {
    id: 242643,
    vote_average: 7.3,
    title: 'Batman: Assault on Arkham',
    popularity: 11.997,
    poster_path: '/nYOoqnGuiUUNE4gccO0JJigfACP.jpg',
    original_title: 'Batman: Assault on Arkham',
    overview:
      'Based on the hit video game series, Batman must find a bomb planted by the Joker while dealing with a mysterious team of villains called, The Suicide Squad.',
    release_date: '2014-08-12'
  },
  {
    id: 125249,
    vote_average: 6.6,
    title: 'Batman',
    popularity: 1.978,
    poster_path: '/hyrAiphvDoBRJ6BPy4lLFVwZfQu.jpg',
    original_title: 'Batman',
    overview:
      "Japanese master spy Daka operates a covert espionage-sabotage organization located in Gotham City's now-deserted Little Tokyo, which turns American scientists into pliable zombies.",
    release_date: '1943-07-16'
  },
  {
    id: 251519,
    vote_average: 6.8,
    title: 'Son of Batman',
    popularity: 11.641,
    poster_path: '/j3SFJqZPeeB9g5JMU7UFLgEqj2T.jpg',
    original_title: 'Son of Batman',
    overview:
      "Batman learns that he has a violent, unruly pre-teen son with Talia al Ghul named Damian Wayne who is secretly being raised by Ra's al Ghul and the League of Assassins. When Ra's al Ghul apparently dies after a battle with Deathstroke, Batman must work to stop his long-lost son from taking revenge and guiding him to a righteous path, in addition to the chance for the pair to truly acknowledging each other as family.",
    release_date: '2014-04-20'
  },
  {
    id: 321528,
    vote_average: 6.9,
    title: 'Batman vs. Robin',
    popularity: 9.547,
    poster_path: '/6g7iQJAgyDn9mep98RXhLI64RcA.jpg',
    original_title: 'Batman vs. Robin',
    overview:
      'Damian Wayne is having a hard time coping with his father\'s "no killing" rule. Meanwhile, Gotham is going through hell with threats such as the insane Dollmaker, and the secretive Court of Owls.',
    release_date: '2015-04-14'
  },
  {
    id: 45162,
    vote_average: 7,
    title: 'Superman/Batman: Apocalypse',
    popularity: 11.5,
    poster_path: '/wNtrbql45NqvomsYKr3uHXgFj2D.jpg',
    original_title: 'Superman/Batman: Apocalypse',
    overview:
      'Batman discovers a mysterious teen-aged girl with superhuman powers and a connection to Superman. When the girl comes to the attention of Darkseid, the evil overlord of Apokolips, events take a decidedly dangerous turn.',
    release_date: '2010-09-28'
  },
  {
    id: 408648,
    vote_average: 5.8,
    title: 'Batman and Harley Quinn',
    popularity: 9.465,
    poster_path: '/uVdxoD9kn28qC8VQiVA6Uif1QHl.jpg',
    original_title: 'Batman and Harley Quinn',
    overview:
      "Batman and Nightwing are forced to team with the Joker's sometimes-girlfriend Harley Quinn to stop a global threat brought about by Poison Ivy and Jason Woodrue, the Floronic Man.",
    release_date: '2017-08-14'
  },
  {
    id: 471474,
    vote_average: 6.5,
    title: 'Batman: Gotham by Gaslight',
    popularity: 11.419,
    poster_path: '/7souLi5zqQCnpZVghaXv0Wowi0y.jpg',
    original_title: 'Batman: Gotham by Gaslight',
    overview:
      'In an alternative Victorian Age Gotham City, Batman begins his war on crime while he investigates a new series of murders by Jack the Ripper.',
    release_date: '2018-01-12'
  },
  {
    id: 20077,
    vote_average: 6.5,
    title: 'The Batman vs. Dracula',
    popularity: 8.99,
    poster_path: '/vPr6t2stb4NJ54151ms5xu8bykP.jpg',
    original_title: 'The Batman vs. Dracula',
    overview:
      'Gotham City is terrorized not only by recent escapees Joker and Penguin, but by the original creature of the night, Dracula! Can Batman stop the ruthless vampire before he turns everyone in the city, including The Caped Crusader, Joker and Penguin, into his mindless minions?',
    release_date: '2005-10-18'
  }
]

export default class InMemoryMovieRepository extends MovieRepository {
  constructor({
    movieListValueObjectFactory,
    movieEntityFactory,
    notFoundMovieErrorFactory
  }) {
    super()
    this._movieListValueObjectFactory = movieListValueObjectFactory
    this._movieEntityFactory = movieEntityFactory
    this._notFoundMovieErrorFactory = notFoundMovieErrorFactory
  }

  async search({keyword}) {
    const movieListValueObject = this._movieListValueObjectFactory({
      list: rawMovieList
        .filter(({title}) => title.includes(keyword))
        .map(res => ({
          id: res.id,
          title: res.title,
          image: res.poster_path,
          description: res.overview
        }))
    })
    return movieListValueObject
  }

  async getTrending() {
    const list = rawMovieList.filter(() => Math.random() < 0.5).map(res => ({
      id: res.id,
      title: res.title,
      image: res.poster_path,
      description: res.overview
    }))

    const movieListValueObject = this._movieListValueObjectFactory({
      list
    })
    return movieListValueObject
  }

  async detail({id}) {
    const res = rawMovieList.find(movieItem => movieItem.id === id)
    const movie = {
      id: res.id,
      title: res.title,
      image: res.poster_path,
      description: res.overview
    }
    if (movie) return this._movieEntityFactory(movie)
    else throw this._notFoundMovieErrorFactory()
  }
}
