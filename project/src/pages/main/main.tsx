import FilmCard from '../../components/film-card/film-card';
import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import GenreLink from '../../components/genre-link/genre-link';
import { Film } from '../../types/film';
import { Genre } from '../../types/genre';


function Main(props: {genres: Genre[], films: Film[], promoFilm: Film, myListCount: number}): JSX.Element {
  const {genres, films, promoFilm, myListCount} = props;
  return (
    <>
      <FilmCard {...{film: promoFilm, myListCount}}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            { genres.map((genre)=>
              <GenreLink {...genre} key={genre.title}/>
            )}

          </ul>

          <FilmList {...{films}}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
}

export default Main;
