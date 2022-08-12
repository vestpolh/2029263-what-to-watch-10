import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import UserBlock from '../../components/user-block/user-block';
import { Film } from '../../types/film';

function myList(props: {films: Film[]}): JSX.Element {
  //console.log(props.films);
  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
        <Logo href='/'/>

        <h1 className='page-title user-page__title'>My list <span className='user-page__film-count'>{props.films.length}</span></h1>
        <UserBlock/>
      </header>

      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>

        <div className="catalog__films-list">
          {props.films?.map((f)=><SmallFilmCard {...f} key={f.title}/>)}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default myList;
