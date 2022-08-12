import { FilmRating } from './film-rating';

export type Film = {
  title: string,
  /** путь до картинки */
  src?: string,
  /** путь до постера */
  poster?: string,
  /** жанр */
  genre?: string,
  /** год выпуска */
  year?: number,
  rating?: FilmRating,
  director?: string,
  starring?: string,
  /** описание фильма. пока разделенное по абзацам */
  desc?: string[],
  /** фильмы похожие в рекомендациях */
  moreLikeThis?: Film[]
};
