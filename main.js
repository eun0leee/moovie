const searchInputEl = document.querySelector('.search-input');
const moviesEl = document.querySelector('.movies');
let page = 1;
const moreBtnEl = document.querySelector('.more-btn');

//////////////// 로딩 애니메이션 ////////////////
const loading = document.querySelector('.loading');
hideLoading();

function showLoading() {
  loading.style.display = 'block';
}
function hideLoading() {
  loading.style.display = 'none';
}

//////////////// 개봉년도 select ////////////////
const selectYearEl = document.querySelector('.select-year');

const currentYear = new Date().getFullYear();
for (let i = currentYear; i >= 1985; i--) {
  const optionYearEl = document.createElement('option');
  optionYearEl.innerText = i;
  optionYearEl.value = i;
  selectYearEl.append(optionYearEl);
}

//////////////// 더보기 버튼 ////////////////
function handleMoreBtn() {
  page += 1;
  getMovies(searchInputEl.value, page);
}

moreBtnEl.addEventListener('click', handleMoreBtn);

//////////////// 렌더링 ////////////////
function renderMovies(movies) {
  movies.map((movie) => {
    if (movie) {
      const movieLiEl = document.createElement('li');
      const posterEl = document.createElement('img');
      posterEl.src = movie.Poster;
      posterEl.alt = `${movie.Title}의 포스터`;
      const infoEl = document.createElement('div');
      infoEl.classList.add('infoEl');
      const titleEl = document.createElement('h3');
      titleEl.textContent = movie.Title;
      const yearEl = document.createElement('span');
      yearEl.textContent = movie.Year;

      moreBtnEl.style.display = 'block';
      infoEl.append(titleEl, yearEl);
      movieLiEl.append(posterEl, infoEl);
      moviesEl.append(movieLiEl);
    } else {
      console.log('해당하는 영화 목록이 없습니다.');
    }
  });
}

//////////////// OMDB API, get ////////////////
async function getMovies(title, page, year) {
  showLoading();
  try {
    const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&s=${title}&page=${page}&y=${year}`);
    const json = await res.json();
    console.log(json);
    hideLoading();
    renderMovies(json.Search);
  } catch (error) {
    console.log(error);
  }
}

//////////////// 영화 제목으로 검색 ////////////////

// input
function handleInput() {
  //select
  const selectCountEl = document.querySelector('.select-count');

  moviesEl.innerHTML !== '' ? (moviesEl.innerHTML = '') : '';

  if (searchInputEl.value.length > 2) {
    searchInputEl.classList.remove('search-input-invalid');
    for (let i = 1; i <= selectCountEl.value; i++) {
      page = i;
      getMovies(searchInputEl.value, page, selectYearEl.value);
    }
  } else {
    searchInputEl.classList.add('search-input-invalid');
  }
}

// submit
const searchBtnEl = document.querySelector('.search-btn');
function handleSubmit(e) {
  e.preventDefault();
  handleInput();
}

searchBtnEl.addEventListener('click', handleSubmit);
// searchInputEl.addEventListener('keyup', handleInput);
