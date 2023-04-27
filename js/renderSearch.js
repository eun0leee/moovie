import { getMovies } from '/js/api';

const renderSearch = () => {
  const searchContent = `
    <form action="" method="post">
    <input
      class="search-input"
      type="text"
      placeholder="Search for the movie title"
      minlength="3"
      maxlength="30"
      required
    />
    <div class="filter">
      <select class="select-count" name="count">
        <option value="1" selected="selected">10</option>
        <option value="2">20</option>
        <option value="3">30</option>
      </select>
      <select class="select-year" name="year">
        <option valuee="" selected>All</option>
      </select>
      <button class="search-btn" type="submit">Search</button>
    </div>
  </form>
  <!----------results---------->
  <div class="results">
    <div class="beforeType">
      <img
        src="https://user-images.githubusercontent.com/90189513/222353175-2ee467f1-aedf-4148-a7df-42e8d17cc075.gif"
        alt="waiting for your action"
      />
      <p>please type...!</p>
    </div>
    <div class="coffee">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>`;

  document.querySelector('main').innerHTML = searchContent;

  // 요소 선택
  const searchFormEl = document.querySelector('form');
  const searchInputEl = document.querySelector('.search-input');
  const selectCountEl = document.querySelector('.select-count');
  const selectYearEl = document.querySelector('.select-year');
  const beforeType = document.querySelector('.beforeType');

  const moviesEl = document.createElement('ul');
  const loadingEl = document.querySelector('.coffee');

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

  // render
  const resultsEl = document.querySelector('.results');
  moviesEl.className = 'movies';
  function renderMovies(movies) {
    resultsEl.innerHTML = '';
    resultsEl.classList.add('afterType');

    if (movies.Response === 'True') {
      movies.Search.map((movie) => {
        const movieLiEl = document.createElement('li');
        movieLiEl.className = 'movie';
        movieLiEl.innerHTML = `
        <img src='${movie.Poster}' alt='${movie.Title}의 포스터' onerror="this.onerror=null; this.src='/assets/no-image.jpg';"/>
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
};

export default renderSearch;
