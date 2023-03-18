import { getMovies } from './api';
import {
  searchFormEl,
  searchInputEl,
  selectCountEl,
  selectYearEl,
  moviesEl,
  makeOptionValue,
  loadingEl,
  beforeType,
} from './store';
import renderMovies from './render';

// 개봉년도 옵션 생성
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
