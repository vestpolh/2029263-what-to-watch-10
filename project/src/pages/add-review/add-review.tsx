import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { Film } from '../../types/film';

function AddReview(props: {film: Film, rating: number}): JSX.Element {
  const {film, rating} = props;
  const ratings = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  return(
    <section className='film-card film-card--full'>
      <div className='film-card__header'>
        <div className='film-card__bg'>
          <img src={film.src} alt={film.title} />
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header'>
          <Logo href='main.html'/>

          <nav className='breadcrumbs'>
            <ul className='breadcrumbs__list'>
              <li className='breadcrumbs__item'>
                <a href='film-page.html' className='breadcrumbs__link'>{film.title}</a>
              </li>
              <li className='breadcrumbs__item'>
                <a className='breadcrumbs__link'>Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock/>
        </header>

        <div className='film-card__poster film-card__poster--small'>
          <img src='img/the-grand-budapest-hotel-poster.jpg' alt='The Grand Budapest Hotel poster' width='218' height='327' />
        </div>
      </div>

      <div className='add-review'>
        <form action='#' className='add-review__form'>
          <div className='rating'>
            <div className='rating__stars'>
              {ratings.map((p)=>(
                <>
                  <input className='rating__input' id={`star-${p}`} type='radio' name='rating' value={p}
                    checked={p === rating}
                  />
                  <label className='rating__label' htmlFor={`star-${p}`}>Rating {p}</label>
                </>
              ))}


              {/* <input className='rating__input' id='star-9' type='radio' name='rating' value='9' />
              <label className='rating__label' for='star-9'>Rating 9</label>

              <input className='rating__input' id='star-8' type='radio' name='rating' value='8' checked />
              <label className='rating__label' for='star-8'>Rating 8</label>

              <input className='rating__input' id='star-7' type='radio' name='rating' value='7' />
              <label className='rating__label' for='star-7'>Rating 7</label>

              <input className='rating__input' id='star-6' type='radio' name='rating' value='6' />
              <label className='rating__label' for='star-6'>Rating 6</label>

              <input className='rating__input' id='star-5' type='radio' name='rating' value='5' />
              <label className='rating__label' for='star-5'>Rating 5</label>

              <input className='rating__input' id='star-4' type='radio' name='rating' value='4' />
              <label className='rating__label' for='star-4'>Rating 4</label>

              <input className='rating__input' id='star-3' type='radio' name='rating' value='3' />
              <label className='rating__label' for='star-3'>Rating 3</label>

              <input className='rating__input' id='star-2' type='radio' name='rating' value='2' />
              <label className='rating__label' for='star-2'>Rating 2</label>

              <input className='rating__input' id='star-1' type='radio' name='rating' value='1' />
              <label className='rating__label' for='star-1'>Rating 1</label> */}
            </div>
          </div>

          <div className='add-review__text'>
            <textarea className='add-review__textarea' name='review-text' id='review-text' placeholder='Review text'></textarea>
            <div className='add-review__submit'>
              <button className='add-review__btn' type='submit'>Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
}

export default AddReview;
