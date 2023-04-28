import { getMovieDetails } from '/src/js/api';

const renderDetail = async () => {
  // api로 값 가져오기
  const response = await getMovieDetails('tt0114709');
  const detailPoster = response.Poster;
  const detailTitle = response.Title;
  const detailYear = response.Year;
  const detailGenre = response.Genre;
  const detailRuntime = response.Runtime;
  const detailPlot = response.Plot;
  const detailDirector = response.Director;
  const detailActors = response.Actors;
  const detailRatingsImdb = response.Ratings[0].Value;
  const detailRatingsRotten = response.Ratings[1].Value;
  const detailRatingsMetacritic = response.Ratings[2].Value;

  // detail 마크업
  const detailContent = `
      <div class="detailContent-top">
        <img class="detailPoster" src="${detailPoster}" alt="toy story poster"/>
        <div class="detailContent-top-desc" >
          <h3 class="detailTitle">${detailTitle}</h3>
          <ul>
            <li class="detailYear">${detailYear}</li>
            <li class="detailGenre">${detailGenre}</li>
            <li class="detailRuntime">${detailRuntime}</li>
          </ul>
          <p class="detailPlot">${detailPlot}</p>
      </div>
      </div>
      <div class="detailContent-bottom">
        <div class="group-ratings">
          <h4>Ratings</h4>
          <ul>
            <li class="detailRatingsImdb">
              <img src="https://images.squarespace-cdn.com/content/v1/57c984f1cd0f68cf4beeb2cf/1472911999963-KH5AM2AU675ZGJUJEGQV/imdb+logo.png" alt="imdb logo"/>
              ${detailRatingsImdb}
            </li>
            <li class="detailRatingsRotten">
              <img src="https://www.boxofficepro.com/wp-content/uploads/2019/08/Rotten.png" alt="Rotten Tomatoes logo"/>
              ${detailRatingsRotten}
            </li>
            <li class="detailRatingsMetacritic">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Metacritic_logo_original.svg/1200px-Metacritic_logo_original.svg.png" alt="Metacritic logo"/>
              ${detailRatingsMetacritic}
            </li>
          </ul>
        </div>
        <div>
          <h4>Director</h4>
          <p class="detailDirector">${detailDirector}</p>
        </div>
        <div>
          <h4>Actors</h4>
          <p class="detailActors">${detailActors}</p>
        </div>       
      </div>
      
    `;
  document.querySelector('main').innerHTML = detailContent;
};

export default renderDetail;
