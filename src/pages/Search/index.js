import { searchMarkup } from './searchMarkup';
import { searchYearOption } from './searchYearOption';
import { searchData } from './searchData';
import { loadingEl } from './searchInitStore';

const renderSearch = () => {
  // main 영역 마크업
  document.querySelector('main').innerHTML = searchMarkup;

  // 요소 선택
  const searchFormEl = document.querySelector('form');
  const searchInputEl = document.querySelector('.search-input');
  const selectCountEl = document.querySelector('.select-count');
  const selectYearEl = document.querySelector('.select-year');
  const beforeTypeEl = document.querySelector('.beforeType');
  let countPages = 0;

  // 개봉년도 옵션 설정
  searchYearOption(selectYearEl);

  // 검색
  const handleSubmit = (e) => {
    e.preventDefault();

    // 키보드 gif 숨기기, 로딩 스피너 보이기, 검색결과 새로 출력
    beforeTypeEl.classList.add('hide');
    loadingEl && loadingEl.classList.add('show');

    // 검색 api 호출 및 렌더
    countPages = selectCountEl.value;
    searchData(searchInputEl.value, selectYearEl.value, countPages);
  };

  searchFormEl.addEventListener('submit', handleSubmit);

  // 무한스크롤
  const infinite = async () => {
    if (
      searchInputEl.value &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight
    ) {
      countPages++;
      searchData(searchInputEl.value, selectYearEl.value, countPages);
    }
  };

  // 디바운스(마지막 호출함수만 실행)
  let timer = null;
  const debouncing = () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(infinite, 500);
  };

  document.addEventListener('scroll', debouncing);
};

export default renderSearch;
