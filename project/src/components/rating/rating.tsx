import { FilmRating } from '../../types/film-rating';

function Rating(props: {value?: FilmRating}): JSX.Element
{
  const {value} = props;
  const score = (value || {}).score || 0;
  //score = 0;
  const ratings = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  return (
    <div className='rating'>
      <div className='rating__stars'>
        {ratings.map((rating, id)=> {
          const key = `star-${rating}`;
          return(
            <div key={key}>
              <input className='rating__input' id={`star-${rating}`} type='radio'
                name='rating'
                value={rating}
                checked={rating >= score}
                readOnly
              />
              <label className='rating__label' htmlFor={`star-${rating}`}>Rating {rating}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Rating;
