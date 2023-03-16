import { getMovies } from './api';
import {
  searchFormEl,
  searchInputEl,
  selectCountEl,
  selectYearEl,
  moviesEl,
  makeOptionValue,
} from './store';
import renderMovies from './render';

// 개봉년도 옵션 생성
makeOptionValue();

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
