import ArticleLink from '../../components/articleLink/articleLink';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/userBlock/userBlock';
import { Article } from '../../types/article';

function myList(): JSX.Element {
  const articles: Article[] = [
    {src: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg', title: 'Fantastic Beasts: The Crimes of Grindelwald'},
    {src: 'img/bohemian-rhapsody.jpg', title: 'Bohemian Rhapsody'},
    {src: 'img/macbeth.jpg', title: 'Macbeth'},
    {src: 'img/aviator.jpg', title: 'Aviator'},
    {src: 'img/we-need-to-talk-about-kevin.jpg', title: 'We need to talk about Kevin'},
    {src: 'img/what-we-do-in-the-shadows.jpg', title: 'What We Do in the Shadows'},
    {src: 'img/revenant.jpg', title: 'Revenant'},
    {src: 'img/johnny-english.jpg', title: 'Johnny English'},
    {src: 'img/shutter-island.jpg', title: 'Shutter Island'}
  ];

  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
        <Logo href='main.html'/>

        <h1 className='page-title user-page__title'>My list <span className='user-page__film-count'>9</span></h1>
        <UserBlock/>
      </header>

      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>

        <div className="catalog__films-list">
          { articles.map((article)=>
            <ArticleLink {...article} key={article.title}/>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default myList;
