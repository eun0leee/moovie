export const searchFormEl = document.querySelector('form');
export const searchInputEl = document.querySelector('.search-input');
export const selectCountEl = document.querySelector('.select-count');
export const selectYearEl = document.querySelector('.select-year');
export const beforeType = document.querySelector('.beforeType');
export const resultsEl = document.querySelector('.results');
export const moviesEl = document.createElement('ul');
export const loadingEl = document.querySelector('.coffee');

// 개봉년도 옵션 생성
export const makeOptionValue = () => {
  let currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= 1980; i--) {
    const optionYearEl = document.createElement('option');
    optionYearEl.value = i;
    optionYearEl.innerText = i;
    selectYearEl.append(optionYearEl);
  }
};
