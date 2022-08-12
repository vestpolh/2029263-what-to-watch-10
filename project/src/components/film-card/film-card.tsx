import { Film } from '../../types/film';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

function FilmCard(props: {film: Film, myListCount: number}): JSX.Element {
  const {film, myListCount} = props;
  return (
    <section className='film-card'>
      <div className='film-card__bg'>
        <img src={film.src} alt={film.title} />
      </div>

      <h1 className='visually-hidden'>WTW</h1>

      <header className='page-header film-card__head'>
        <Logo/>
        <UserBlock/>
      </header>

      <div className='film-card__wrap'>
        <div className='film-card__info'>
          <div className='film-card__poster'>
            <img src={film.poster} alt={`${film.title} poster`} width='218' height='327' />
          </div>

          <div className='film-card__desc'>
            <h2 className='film-card__title'>{film.title}</h2>
            <p className='film-card__meta'>
              <span className='film-card__genre'>{film.genre}</span>
              <span className='film-card__year'>{film.year}</span>
            </p>

            <div className='film-card__buttons'>
              <button className='btn btn--play film-card__button' type='button'>
                <svg viewBox='0 0 19 19' width='19' height='19'>
                  <use xlinkHref='#play-s'></use>
                </svg>
                <span>Play</span>
              </button>
              <button className='btn btn--list film-card__button' type='button'>
                <svg viewBox='0 0 19 20' width='19' height='20'>
                  <use xlinkHref='#add'></use>
                </svg>
                <span>My list</span>
                <span className='film-card__count'>{myListCount}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilmCard;
