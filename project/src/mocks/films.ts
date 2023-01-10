import { Film } from '../types/film';

export const films: Film[] = [
  {
    src: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    rating: {
      score: 5.9,
      level: 'Not bad',
      count: 100
    },
  },
  {
    src: 'img/bohemian-rhapsody.jpg',
    title: 'Bohemian Rhapsody',
    rating: {
      score: 1.9,
      level: 'Bad',
      count: 50
    },
  },
  {src: 'img/macbeth.jpg', title: 'Macbeth'},
  {src: 'img/aviator.jpg', title: 'Aviator'},
  {src: 'img/we-need-to-talk-about-kevin.jpg', title: 'We need to talk about Kevin'},
  {src: 'img/what-we-do-in-the-shadows.jpg', title: 'What We Do in the Shadows'},
  {src: 'img/revenant.jpg', title: 'Revenant'},
  {src: 'img/johnny-english.jpg', title: 'Johnny English'},
  {src: 'img/shutter-island.jpg', title: 'Shutter Island'},
  {src: 'img/pulp-fiction.jpg', title: 'Pulp Fiction'},
  {src: 'img/no-country-for-old-men.jpg', title: 'No Country for Old Men'},
  {src: 'img/snatch.jpg', title: 'Snatch'},
  {src: 'img/moonrise-kingdom.jpg', title: 'Moonrise Kingdom'},
  {src: 'img/seven-years-in-tibet.jpg', title: 'Seven Years in Tibet'},
  {src: 'img/midnight-special.jpg', title: 'Midnight Special'},
  {src: 'img/war-of-the-worlds.jpg', title: 'War of the Worlds'},
  {src: 'img/dardjeeling-limited.jpg', title: 'Dardjeeling Limited'},
  {src: 'img/orlando.jpg', title: 'Orlando'},
  {src: 'img/mindhunter.jpg', title: 'Mindhunter'},
  {src: 'img/midnight-special.jpg', title: 'Midnight Special'},
  {
    src: 'img/bg-the-grand-budapest-hotel.jpg',
    title: 'The Grand Budapest Hotel',
    year: 2014,
    genre: 'Drama',
    rating: {
      score: 8.9,
      level: 'Very good',
      count: 240
    },
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
    desc: [
      'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
      'Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.'
    ],
    moreLikeThis: [
      {title: 'Fantastic Beasts: The Crimes of Grindelwald', src: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'},
      {title: 'Bohemian Rhapsody', src: 'img/bohemian-rhapsody.jpg'},
      {title: 'Macbeth', src: 'img/macbeth.jpg'},
      {title: 'Aviator', src: 'img/aviator.jpg'}
    ]
  }
];
