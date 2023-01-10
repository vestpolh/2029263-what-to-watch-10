import { Film } from '../../types/film';
import SmallFilmCard from '../small-film-card/small-film-card';

function FilmList(props: {films: Film[]}): JSX.Element {

  const {films} = props;

  return (
    <div className="catalog__films-list">
      {Array.isArray(films) ? films.map((f)=><SmallFilmCard {...f} key={f.title}/>) : null}
    </div>
  );
}

export default FilmList;
