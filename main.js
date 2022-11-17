;(async () => {
  // 초기화
  const inputEl = document.querySelector(".search-input");
  const searchBtnEl = document.querySelector(".search-btn");
  const moviesEl = document.querySelector(".movies");
  let title;
  
  // search 버튼 클릭
  searchBtnEl.addEventListener("click", async (e) => {
    e.preventDefault();

    if (moviesEl.innerHTML !== "") {
      moviesEl.innerHTML = "";
    }

    title = inputEl.value;
    const movies = await getMovies(title);
    renderMovies(movies);
  });

  // 영화 api 가져오기
  async function getMovies(title, page = 1) {
    const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&s=${title}&page=${page}`);
    const { Search: movies } = await res.json();
    return movies;
  }

  // 렌더링
  function renderMovies(movies) {
    for (const movie of movies) {
      const el = document.createElement("div");
      el.classList.add("movie");
      
      const h3El = document.createElement("h3");
      h3El.textContent = movie.Title;
      h3El.addEventListener("click", () => {
        console.log(movie.Title);
      });

      const imgEl = document.createElement("img");
      imgEl.src = movie.Poster;

      el.append(h3El, imgEl);

      moviesEl.append(el);
    }
  }
})();