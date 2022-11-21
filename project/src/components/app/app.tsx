import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Film } from '../../types/film';
import { Genre } from '../../types/genre';
import { AppRoute, AuthorizationStatus } from '../../consts';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {

  const film: Film = {
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
  };

  const genres: Genre[] = [
    {href: '#', title: 'All genres', isActive: true},
    {href: '#', title: 'Comedies'},
    {href: '#', title: 'Crime'},
    {href: '#', title: 'Documentary'},
    {href: '#', title: 'Dramas'},
    {href: '#', title: 'Horror'},
    {href: '#', title: 'Kids & Family'},
    {href: '#', title: 'Romance'},
    {href: '#', title: 'Sci-Fi'},
    {href: '#', title: 'Thrillers'}
  ];

  const films: Film[] = [
    {src: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg', title: 'Fantastic Beasts: The Crimes of Grindelwald'},
    {src: 'img/bohemian-rhapsody.jpg', title: 'Bohemian Rhapsody'},
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
    {src: 'img/midnight-special.jpg', title: 'Midnight Special'}
  ];

  const promoFilm: Film = {
    title: 'The Grand Budapest Hotel',
    src: 'img/bg-the-grand-budapest-hotel.jpg',
    poster: 'img/the-grand-budapest-hotel-poster.jpg',
    genre: 'Drama',
    year: 2004
  };

  const myListCount = 9;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main {...{genres, promoFilm, films, myListCount}}/>}/>
        <Route path={AppRoute.SignIn} element={<SignIn/>}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyList {...{films: films.slice(0, myListCount)}}/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<MoviePage {...{film, myListCount}}/>}/>
        <Route path={AppRoute.AddReview} element={<AddReview {...{film: promoFilm, rating: 8}}/>}/>
        <Route path={AppRoute.Player} element={<Player/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
