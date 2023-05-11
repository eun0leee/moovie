export const searchResultsRender = (movies) => {
  const resultsEl = document.querySelector('.results');
  const moviesEl = document.createElement('ul');
  moviesEl.className = 'movies';

  //렌더시마다 검색결과 영역초기화
  resultsEl.innerHTML = '';
  resultsEl.classList.add('afterType');
  if (movies.length !== 0) {
    movies.map((movie) => {
      //각 요소 설정
      const movieLiEl = document.createElement('li');
      movieLiEl.className = 'movie';

      //영화 제목
      let movieTitleEl = '';
      if (movie.Title) {
        movieTitleEl =
          movie.Title.length > 25
            ? movie.Title.slice(0, 25) + '...'
            : movie.Title;
      } else {
        movieTitleEl = 'title';
      }

      //영화 개봉년도
      let movieYearEl = '';
      if (movie.Year) {
        movieYearEl = movie.Year.slice(0, 4);
      } else {
        movieYearEl = 'year';
      }

      //movie li 내용
      movieLiEl.innerHTML = `
        ${
          movie.Poster === 'N/A'
            ? `<div class="no-image"></div>`
            : `<img class="search-poster" src="${movie.Poster}" alt="${movie.Title}의 포스터" />`
        }
        <a class='info' href="/detail/${movie.imdbID}">
          <p>${movieTitleEl}</p>
          <p>${movieYearEl}</p>
        </a>
        `;

      //movie li 부모 요소 내용
      moviesEl.append(movieLiEl);
      resultsEl.append(moviesEl);
    });
  } else {
    resultsEl.innerHTML = '';

    //검색결과 없음 text 출력
    const noResults = document.createElement('p');
    noResults.className = 'noResults';
    noResults.innerText =
      'No search results found.TT \n Try searching with another keyword.';
    resultsEl.append(noResults);
  }
};
