const formEl = document.querySelector('form');
const searchInputEl = document.querySelector('.search-input');
const searchBtnEl = document.querySelector('.search-btn');
const selectCountEl = document.querySelector('.select-count');
const moviesEl = document.querySelector('.movies');
let page = 1;

//////////////// 렌더링 ////////////////
function renderMovies(movies) {
  movies.map((movie) => {
    if (movie) {
      const movieLiEl = document.createElement('li');
      const posterEl = document.createElement('img');
      posterEl.src = movie.Poster;
      posterEl.alt = `${movie.Title}의 포스터`;
      const titleEl = document.createElement('h3');
      titleEl.textContent = movie.Title;
      const yearEl = document.createElement('span');
      yearEl.textContent = movie.Year;

      movieLiEl.append(posterEl, titleEl, yearEl);
      moviesEl.append(movieLiEl);
    } else {
      console.log('해당하는 영화 목록이 없습니다.');
    }
  });
}

//////////////// OMDB API, get ////////////////
async function getMovies(title, page) {
  try {
    const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&s=${title}&page=${page}`);
    const json = await res.json();
    console.log(json);
    renderMovies(json.Search);
  } catch (error) {
    console.log(error);
  }
}

//////////////// 영화 제목으로 검색 ////////////////

// input
function handleInput() {
  moviesEl.innerHTML !== '' ? (moviesEl.innerHTML = '') : '';

  if (searchInputEl.value.length > 2) {
    searchInputEl.classList.remove('search-input-invalid');
    for (let i = 1; i <= selectCountEl.value; i++) {
      page = i;
      getMovies(searchInputEl.value, page);
    }
  } else {
    searchInputEl.classList.add('search-input-invalid');
  }
}

// submit
function handleSubmit(e) {
  e.preventDefault();
  handleInput();
}

searchBtnEl.addEventListener('click', handleSubmit);
// searchInputEl.addEventListener('keyup', handleInput);

//////////////// 더보기 버튼 클릭 ////////////////
const moreBtnEl = document.querySelector('.more-btn');

function handleMoreBtn() {
  page += 1;
  getMovies(searchInputEl.value, page);
}

moreBtnEl.addEventListener('click', handleMoreBtn);

//////////////// filter  ////////////////
