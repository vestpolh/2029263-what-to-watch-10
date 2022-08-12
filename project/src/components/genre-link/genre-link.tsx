import { Genre } from '../../types/genre';


function GenreLink(genre: Genre): JSX.Element
{
  let className = 'catalog__genres-item ';
  className += genre.isActive === true ? 'catalog__genres-item--active' : '';

  return (
    <li className={className}>
      <a href={genre.href} className='catalog__genres-link'>{genre.title}</a>
    </li>
  );
}

export default GenreLink;
