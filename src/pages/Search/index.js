import { getMovies } from '/src/js/api';
import { searchContent } from './SearchContent';

const renderSearch = () => {
  // main 영역 마크업
  document.querySelector('main').innerHTML = searchContent;

  // 요소 선택
  const searchFormEl = document.querySelector('form');
  const searchInputEl = document.querySelector('.search-input');
  const selectCountEl = document.querySelector('.select-count');
  const selectYearEl = document.querySelector('.select-year');
  const beforeType = document.querySelector('.beforeType');
  const moviesEl = document.createElement('ul');
  const loadingEl = document.querySelector('.coffee');

  // 개봉년도 옵션 설정
  const makeOptionValue = () => {
    let currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1980; i--) {
      const optionYearEl = document.createElement('option');
      optionYearEl.value = i;
      optionYearEl.innerText = i;
      selectYearEl.append(optionYearEl);
    }
  };

  makeOptionValue();

  // 렌더
  const resultsEl = document.querySelector('.results');
  moviesEl.className = 'movies';
  function renderMovies(movies) {
    resultsEl.innerHTML = '';
    resultsEl.classList.add('afterType');

    if (movies.Response === 'True') {
      movies.Search.map((movie) => {
        console.log(movie.Poster === 'N/A');
        const movieLiEl = document.createElement('li');
        movieLiEl.className = 'movie';
        movieLiEl.innerHTML = `
        ${
          movie.Poster === 'N/A'
            ? `<div class="no-image"></div>`
            : `<img class="search-poster" src="${movie.Poster}" alt="${movie.Title}의 포스터" />`
        }
        <div class='info'>
          <p>${movie.Title}</p>
          <p>${movie.Year}</p>
        </div>
        `;
        moviesEl.append(movieLiEl);
        resultsEl.append(moviesEl);
      });
    } else if (movies.Response === 'False') {
      resultsEl.innerHTML = '';
      const noResults = document.createElement('p');
      noResults.className = 'noResults';
      noResults.innerText =
        'No search results found.TT \n Try searching with another keyword.';
      resultsEl.append(noResults);
    }
  }

  // api get 호출 및 렌더
  let page = 0;

  const getDataAndRender = async () => {
    const response = await getMovies(
      searchInputEl.value,
      page,
      selectYearEl.value
    );
    console.log(response);
    loadingEl.classList.remove('show');
    renderMovies(response);
  };

  // 검색
  const handleSubmit = (e) => {
    e.preventDefault();

    beforeType.classList.add('hide');
    loadingEl.classList.add('show');
    moviesEl.innerHTML !== '' ? (moviesEl.innerHTML = '') : '';

    for (let i = 1; i <= selectCountEl.value; i++) {
      page = i;
      getDataAndRender();
    }
  };

  searchFormEl.addEventListener('submit', handleSubmit);

  // 무한스크롤
  const infinite = async () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      page += 1;
      getDataAndRender();
    }
  };

  let timer = null;
  function debouncing() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(infinite, 500);
  }

  document.addEventListener('scroll', debouncing);
};

export default renderSearch;
