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
import Test from '../test/test';

function App(props: {films: Film[]}): JSX.Element {

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

  const promoFilm: Film = {
    title: 'The Grand Budapest Hotel',
    src: 'img/bg-the-grand-budapest-hotel.jpg',
    poster: 'img/the-grand-budapest-hotel-poster.jpg',
    genre: 'Drama',
    year: 2004
  };

  const myListCount = 9;

  const {films} = props;

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
        <Route path={AppRoute.Film} element={<MoviePage {...{films, myListCount}}/>}/>
        <Route path={AppRoute.AddReview} element={<AddReview {...{films}}/>}/>
        <Route path={AppRoute.Player} element={<Player/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
