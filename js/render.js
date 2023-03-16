import { moviesEl, resultsEl } from './store';

moviesEl.className = 'movies';

export default function renderMovies(movies) {
  resultsEl.classList.add('afterType');

  if (movies.Response === 'True') {
    movies.Search.map((movie) => {
      const movieLiEl = document.createElement('li');
      movieLiEl.className = 'movie';
      movieLiEl.innerHTML = `
          <img src='${movie.Poster}' alt='${movie.Title}의 포스터'/>
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
