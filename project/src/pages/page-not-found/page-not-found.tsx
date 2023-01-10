import { Link } from 'react-router-dom';

function PageNotFound(): JSX.Element {
  return (
    <>
      <h1>Ошибка 404. Страница не существует.</h1>
      <Link to='/'>Вернуться на главную.</Link>
    </>
  );
}

export default PageNotFound;
