import { getMovieDetails } from '/src/js/api';
import { detailMarkup } from '/src/pages/Detail/detailMarkup';

const renderDetail = async (id = 'tt0114709') => {
  // api로 값 가져오기
  const response = await getMovieDetails(id);
  const detailPoster = response.Poster ? response.Poster : '';
  const detailTitle = response.Title;
  const detailYear = response.Year;
  const detailGenre = response.Genre;
  const detailRuntime = response.Runtime;
  const detailPlot = response.Plot.slice(0, 172) + '...';
  const detailDirector = response.Director;
  const detailActors = response.Actors;
  const detailRatingsImdb = response.Ratings[0]
    ? response.Ratings[0].Value
    : null;
  const detailRatingsRotten = response.Ratings[1]
    ? response.Ratings[1].Value
    : null;
  const detailRatingsMetacritic = response.Ratings[2]
    ? response.Ratings[2].Value
    : null;

  // detail 마크업
  document.querySelector('main').innerHTML = detailMarkup({
    detailPoster,
    detailTitle,
    detailYear,
    detailGenre,
    detailRuntime,
    detailPlot,
    detailRatingsImdb,
    detailRatingsRotten,
    detailRatingsMetacritic,
    detailDirector,
    detailActors,
  });
};

export default renderDetail;
