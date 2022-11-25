import { ChangeEvent, useState } from 'react';
import { Film } from '../../types/film';
import Rating from '../rating/rating';

function AddReviewForm(props: {film: Film}): JSX.Element {
  const {film} = props;
  const [review, setReview] = useState('');

  const onChangeHandle = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    /* eslint-disable no-console */
    //console.log(evt);
    setReview(evt.target.value);
  };

  const onClickHandle = () => {
    /* eslint-disable no-console */
    console.log('click');
  };

  return (
    <form className='add-review__form'>
      <Rating value={film.rating}/>

      <div className='add-review__text'>
        <textarea className='add-review__textarea' name='review-text' id='review-text' placeholder='Review text'
          value={review} onChange={(evt)=>onChangeHandle(evt)}
        >

        </textarea>
        <div className='add-review__submit'>
          <button className='add-review__btn' /*type='submit'*/ onClick={()=>onClickHandle}>Post</button>
        </div>
      </div>
    </form>
  );
}

export default AddReviewForm;
