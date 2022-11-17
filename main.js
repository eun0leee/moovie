;(async () => {
  // 초기화 코드
  const inputEl = document.querySelector(".search-input");
  const selectPageEl = document.querySelector(".page");
  const searchBtnEl = document.querySelector(".search-btn");
  const moviesEl = document.querySelector(".movies");
  const moreBtnEl = document.querySelector(".btn");
  let title;
  let page;
  
  // search 버튼 클릭
  searchBtnEl.addEventListener("click", async (e) => {
    e.preventDefault();

    if (moviesEl.innerHTML !== "") {
      moviesEl.innerHTML = "";
    }

    title = inputEl.value;
    const pagenum = selectPageEl.value; // select option 설정
    for(let i = 1; i <= pagenum; i ++) {
      page = i;
      const movie = await getMovies(title, page);
      renderMovies(movie);
    }
  });

  // 더보기 버튼 클릭
  moreBtnEl.addEventListener("click", async () => {
    title = inputEl.value;
    page += 1;
    const movies = await getMovies(title, page);
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

      const imgEl = document.createElement("img");
      imgEl.src = movie.Poster;

      el.append(h3El, imgEl);

      moviesEl.append(el);
    }
  }
})();