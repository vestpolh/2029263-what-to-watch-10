import { Link } from 'react-router-dom';
import { Film } from '../../types/film';

function SmallFilmCard(film: Film): JSX.Element {
  return (
    <article className='small-film-card catalog__films-card'>
      <div className='small-film-card__image'>
        <img src={film.src} alt={film.title} width='280' height='175' />
      </div>
      <h3 className='small-film-card__title'>
        <Link className='small-film-card__link' to={`/film/${film.title}`}>{film.title}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
