import { getMovies } from '/src/js/api';
import { searchResultsRender } from './searchResultsRender';

export const searchData = async (keyword, year, countPages) => {
  const loadingEl = document.querySelector('.coffee');
  const moviesData = [];
  for (let i = 1; i <= countPages; i++) {
    const response = await getMovies(keyword, year, i);
    response.Response === 'True'
      ? moviesData.push(...response.Search)
      : moviesData.push(...[]);
  }
  loadingEl && loadingEl.classList.remove('show');
  console.log(moviesData);
  searchResultsRender(moviesData);
};
