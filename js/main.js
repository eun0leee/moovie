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

// 검색
const handleSubmit = async (e) => {
  e.preventDefault();

  beforeType.classList.add('hide');
  loadingEl.classList.add('show');
  moviesEl.innerHTML !== '' ? (moviesEl.innerHTML = '') : '';

  for (let i = 1; i <= selectCountEl.value; i++) {
    let page = i;
    const response = await getMovies(
      searchInputEl.value,
      page,
      selectYearEl.value
    );
    loadingEl.classList.remove('show');
    renderMovies(response);
  }
};

searchFormEl.addEventListener('submit', handleSubmit);
