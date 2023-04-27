import { getMovieDetails } from '/src/js/api';

const renderDetail = async () => {
  // api로 값 가져오기
  const response = await getMovieDetails('tt0114709');
  const moviePoster = response.Poster;
  const movieTitle = response.Title;
  const movieYear = response.Year;
  const movieGenre = response.Genre;
  const movieRuntime = response.Runtime;
  const moviePlot = response.Plot;
  const movieDirector = response.Director;
  const movieActors = response.Actors;
  const movieRatingsImdb = response.Ratings[0].Value;
  const movieRatingsRotten = response.Ratings[1].Value;
  const movieRatingsMetacritic = response.Ratings[2].Value;

  // detail 마크업
  const detailContent = `
      <div>
        <img src="${moviePoster}" alt="toy story poster"/>
        <h3>${movieTitle}</h3>
        <ul>
          <li>${movieYear}</li>
          <li>${movieGenre}</li>
          <li>${movieRuntime}</li>
        </ul>
        <p>${moviePlot}</p>
      </div>
      <div>
        <p>${movieDirector}</p>
        <p>${movieActors}</p>
        <ul>
          <li>Imdb ${movieRatingsImdb}</li>
          <li>Rotten Tomatoes ${movieRatingsRotten}</li>
          <li>Metacritic ${movieRatingsMetacritic}</li>
        </ul>
      </div>
      
    `;
  document.querySelector('main').innerHTML = detailContent;
};

export default renderDetail;
