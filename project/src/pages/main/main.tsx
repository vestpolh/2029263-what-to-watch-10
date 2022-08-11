import ArticleLink from '../../components/articleLink/articleLink';
import FilmCard from '../../components/filmCard/filmCard';
import Footer from '../../components/footer/footer';
import GenreLink from '../../components/genreLink/genreLink';
import { Article } from '../../types/article';
import { Film } from '../../types/film';
import { Genre } from '../../types/genre';


function Main(): JSX.Element {

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

  const articles: Article[] = [
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
    genre: 'Drama',
    year: 2004
  };

  return (
    <>
      <FilmCard {...promoFilm}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            { genres.map((genre)=>
              <GenreLink {...genre} key={genre.title}/>
            )}

          </ul>

          <div className="catalog__films-list">
            { articles.map((article)=>
              <ArticleLink {...article} key={article.title}/>
            )}
          </div>

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
