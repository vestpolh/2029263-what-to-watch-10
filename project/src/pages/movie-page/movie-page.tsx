import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import UserBlock from '../../components/user-block/user-block';
import { Film } from '../../types/film';

function MoviePage(props: {film: Film, myListCount: number}): JSX.Element{
  const {film, myListCount} = props;
  return(
    <>
      <section className='film-card film-card--full'>
        <div className='film-card__hero'>
          <div className='film-card__bg'>
            <img src={film.src} alt={film.title} />
          </div>

          <h1 className='visually-hidden'>WTW</h1>

          <header className='page-header film-card__head'>
            <Logo href='/' />
            <UserBlock />
          </header>

          <div className='film-card__wrap'>
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
                <a href='add-review.html' className='btn film-card__button'>Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className='film-card__wrap film-card__translate-top'>
          <div className='film-card__info'>
            <div className='film-card__poster film-card__poster--big'>
              <img src={film.src} alt={film.title} width='218' height='327' />
            </div>

            <div className='film-card__desc'>
              <nav className='film-nav film-card__nav'>
                <ul className='film-nav__list'>
                  <li className='film-nav__item film-nav__item--active'>
                    <a href='/' className='film-nav__link'>Overview</a>
                  </li>
                  <li className='film-nav__item'>
                    <a href='/' className='film-nav__link'>Details</a>
                  </li>
                  <li className='film-nav__item'>
                    <a href='/' className='film-nav__link'>Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className='film-rating'>
                <div className='film-rating__score'>{film.rating?.score}</div>
                <p className='film-rating__meta'>
                  <span className='film-rating__level'>{film.rating?.level}</span>
                  <span className='film-rating__count'>{film.rating?.count} ratings</span>
                </p>
              </div>

              <div className='film-card__text'>
                {film.desc?.map((p)=><p key={p}>{p}</p>)}
                <p className='film-card__director'><strong>Director: {film.director}</strong></p>
                <p className='film-card__starring'><strong>Starring: {film.starring}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog catalog--like-this'>
          <h2 className='catalog__title'>More like this</h2>
          <div className='catalog__films-list'>
            {film.moreLikeThis?.map((f)=><SmallFilmCard key={f.title} {...f}/>)}
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
}

export default MoviePage;
