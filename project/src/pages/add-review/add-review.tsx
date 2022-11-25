import { Link, useParams } from 'react-router-dom';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { Film } from '../../types/film';

function AddReview(props: {films: Film[],}): JSX.Element {
  const {id} = useParams();
  const film = props.films.find((f) => f.title === id) || ({} as Film);
  return(
    <section className='film-card film-card--full'>
      <div className='film-card__header'>
        <div className='film-card__bg'>
          <img src={film.src} alt={film.title} />
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header'>
          <Logo href='/'/>

          <nav className='breadcrumbs'>
            <ul className='breadcrumbs__list'>
              <li className='breadcrumbs__item'>
                <Link to={`../film/${film.title}`} className='breadcrumbs__link'>{film.title}</Link>
              </li>
              <li className='breadcrumbs__item'>
                <Link to={`../film/${film.title}/review`} className='breadcrumbs__link'>Add review</Link>
              </li>
            </ul>
          </nav>

          <UserBlock/>
        </header>

        <div className='film-card__poster film-card__poster--small'>
          <img src={film.src} alt={film.title} width='218' height='327' />
        </div>
      </div>

      <div className='add-review'>

        <AddReviewForm film={film} />

      </div>

    </section>
  );
}

export default AddReview;
