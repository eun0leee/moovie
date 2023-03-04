import { getMovies } from './api';

const searchFormEl = document.querySelector('form');
const searchInputEl = document.querySelector('.search-input');
const selectCountEl = document.querySelector('.select-count');
const selectYearEl = document.querySelector('.select-year');
const beforeType = document.querySelector('.beforeType');

// 개봉년도 옵션 생성
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

// 렌더링
const resultsEl = document.querySelector('.results');
const moviesEl = document.createElement('ul');
moviesEl.className = 'movies';

function renderMovies(movies) {
  beforeType.classList.add('hide');
  if (movies.Response === 'True') {
    movies.Search.map((movie) => {
      const movieLiEl = document.createElement('li');
      movieLiEl.className = 'movie';
      movieLiEl.innerHTML = `
        <img src='${movie.Poster}' alt='${movie.Title}의 포스터'/>
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

// 검색
const handleSubmit = async (e) => {
  moviesEl.innerHTML !== '' ? (moviesEl.innerHTML = '') : '';
  e.preventDefault();
  for (let i = 1; i <= selectCountEl.value; i++) {
    let page = i;
    const response = await getMovies(
      searchInputEl.value,
      page,
      selectYearEl.value
    );
    console.log(response);
    renderMovies(response);
  }
};

searchFormEl.addEventListener('submit', handleSubmit);

// 로딩
// const loading = document.querySelector('.loading');
// hideLoading();

// function showLoading() {
//   loading.style.display = 'block';
// }
// function hideLoading() {
//   loading.style.display = 'none';
// }

// const infoEl = document.createElement('div');
// infoEl.classList.add('infoEl');
// const titleEl = document.createElement('h3');
// titleEl.textContent = movie.Title;
// const yearEl = document.createElement('span');
// yearEl.textContent = movie.Year;
// infoEl.append(titleEl, yearEl);
